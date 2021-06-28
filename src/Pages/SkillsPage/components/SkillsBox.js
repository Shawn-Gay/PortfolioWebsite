import React, { useEffect, useRef } from 'react'
import Matter from 'matter-js'

export default function SkillsBox() {
    const boxRef = useRef(null)
    const canvasRef = useRef(null)

    useEffect(() => {
        let Engine = Matter.Engine
        let Render = Matter.Render
        let World = Matter.World
        let Bodies = Matter.Bodies
        let Mouse = Matter.Mouse
        let MouseConstraint = Matter.MouseConstraint
        let engine = Engine.create({})
        let render = Render.create({
            element: boxRef.current,
            engine: engine,
            canvas: canvasRef.current,
            options: {
                width: 300,
                height: 300,
                background: 'rgb(16, 16, 16)',
                wireframes: false,
            },
        })
        
        const walls = [Bodies.rectangle(0, 150, 20, 300, {
            isStatic: true,
            render: {
              fillStyle: 'rgb(64, 64, 64)',
            },
          }), Bodies.rectangle(150, 300, 300, 20, {
            isStatic: true,
            render: {
              fillStyle: 'rgb(64, 64, 64)',
            },
          }),
          Bodies.rectangle(300, 150, 20, 300, {
            isStatic: true,
            render: {
              fillStyle: 'rgb(64, 64, 64)',
            },
          }),
          Bodies.rectangle(150, 0, 300, 20, {
            isStatic: true,
            render: {
              fillStyle: 'rgb(64, 64, 64)',
            },
          })]
          
          const ball = Bodies.circle(150, 0, 10, {
            restitution: 0.9,
            render: {
              fillStyle: 'yellow',
            },
          })
          let canvasMouse = Mouse.create(render.canvas)
          canvasMouse.pixelRatio = window.devicePixelRatio;
          const options = {
            mouse: canvasMouse,
            constraint: {
                render: {visible: false}
            }
          }
          let mConstraint = MouseConstraint.create(engine, options)

          engine.gravity.y = 0;

          World.add(engine.world, [...walls, ball, mConstraint],  )
          Matter.Runner.run(engine)
          Render.run(render)

        }, [])
        return (
          <div className="physics-box"
            ref={boxRef}
            style={{
              width: 300,
              height: 300,
            }}
          >
            <canvas ref={canvasRef} />
          </div>
        )
      }
