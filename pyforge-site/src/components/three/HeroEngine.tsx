import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

interface Node {
  mesh: THREE.Mesh
  label: string
  angle: number
  radius: number
  speed: number
}

const HeroEngine: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const w = mount.clientWidth
    const h = mount.clientHeight

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000)
    camera.position.z = 5

    // Mouse tracking
    const mouse = new THREE.Vector2(0, 0)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2
    }
    mount.addEventListener('mousemove', handleMouseMove)

    // Central core
    const coreGeo = new THREE.IcosahedronGeometry(0.35, 1)
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x0066ff,
      emissive: 0x003399,
      shininess: 80,
      wireframe: false,
    })
    const core = new THREE.Mesh(coreGeo, coreMat)
    scene.add(core)

    // Wireframe overlay on core
    const coreWireGeo = new THREE.IcosahedronGeometry(0.37, 1)
    const coreWireMat = new THREE.MeshBasicMaterial({ color: 0x00c8ff, wireframe: true, transparent: true, opacity: 0.3 })
    const coreWire = new THREE.Mesh(coreWireGeo, coreWireMat)
    scene.add(coreWire)

    // Orbit ring
    const ringGeo = new THREE.TorusGeometry(1.4, 0.008, 6, 80)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x0066ff, transparent: true, opacity: 0.25 })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 4
    scene.add(ring)

    const ring2Geo = new THREE.TorusGeometry(1.8, 0.005, 6, 80)
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x00c8ff, transparent: true, opacity: 0.15 })
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
    ring2.rotation.x = -Math.PI / 3
    ring2.rotation.y = Math.PI / 5
    scene.add(ring2)

    // Satellite nodes
    const labels = ['Python', 'AI', 'Automation', 'APIs', 'Data', 'Applications']
    const nodeColors = [0x0066ff, 0x8b5cf6, 0x00c8ff, 0x0047cc, 0x3385ff, 0x00a8d4]
    const nodes: Node[] = []

    labels.forEach((label, i) => {
      const angle = (i / labels.length) * Math.PI * 2
      const radius = 1.4
      const geo = new THREE.OctahedronGeometry(0.12, 0)
      const mat = new THREE.MeshPhongMaterial({
        color: nodeColors[i],
        emissive: nodeColors[i],
        emissiveIntensity: 0.3,
        shininess: 60,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.x = Math.cos(angle) * radius
      mesh.position.y = Math.sin(angle) * radius * 0.6
      mesh.position.z = Math.sin(angle) * 0.3
      scene.add(mesh)
      nodes.push({ mesh, label, angle, radius, speed: 0.003 + Math.random() * 0.002 })
    })

    // Connection lines from core to nodes
    const lineMat = new THREE.LineBasicMaterial({ color: 0x0066ff, transparent: true, opacity: 0.3 })
    const lines: THREE.Line[] = []
    nodes.forEach(node => {
      const points = [new THREE.Vector3(0, 0, 0), node.mesh.position.clone()]
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(lineGeo, lineMat)
      scene.add(line)
      lines.push(line)
    })

    // Floating particles
    const particleCount = 60
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 8
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({ color: 0x0066ff, size: 0.025, transparent: true, opacity: 0.5 })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0x0066ff, 2, 10)
    pointLight.position.set(2, 2, 2)
    scene.add(pointLight)
    const pointLight2 = new THREE.PointLight(0x00c8ff, 1, 10)
    pointLight2.position.set(-2, -1, 1)
    scene.add(pointLight2)

    // Animation
    let frameId: number
    let t = 0

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      t += 0.01

      core.rotation.y += 0.005
      core.rotation.x += 0.002
      coreWire.rotation.y -= 0.006
      coreWire.rotation.x += 0.003

      ring.rotation.z += 0.002
      ring2.rotation.z -= 0.0015

      particles.rotation.y += 0.0005

      nodes.forEach((node, i) => {
        node.angle += node.speed
        node.mesh.position.x = Math.cos(node.angle) * node.radius
        node.mesh.position.y = Math.sin(node.angle) * node.radius * 0.6 + Math.sin(t + i) * 0.08
        node.mesh.position.z = Math.sin(node.angle) * 0.3
        node.mesh.rotation.x += 0.02
        node.mesh.rotation.y += 0.015

        // Update connection lines
        const positions = new Float32Array([0, 0, 0, node.mesh.position.x, node.mesh.position.y, node.mesh.position.z])
        lines[i].geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        lines[i].geometry.attributes.position.needsUpdate = true
      })

      // Subtle camera parallax from mouse
      camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.05
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const handleResize = () => {
      if (!mount) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      mount.removeEventListener('mousemove', handleMouseMove)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <motion.div
      ref={mountRef}
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
    />
  )
}

export default HeroEngine
