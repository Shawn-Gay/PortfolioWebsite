import React, {useEffect, useRef} from "react";
import Matter, { Body } from "matter-js";

const SkillsBox = () => {
  
  const scene = useRef(null)

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Composite = Matter.Composite;
    let Bodies = Matter.Bodies;
    let Mouse = Matter.Mouse;
    let MouseConstraint = Matter.MouseConstraint;

    let engine = Engine.create({});

    let render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        width: 350,
        height: 350,
        wireframes: false,
        background: 'rgb(32,32,32)',
      }
    });

    World.add(engine.world, [
    Bodies.circle(50, 100, 30, {
      restitution: .75,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .1,
          yScale: .1,
          texture: './img/reactLogo.png'
        }
      }
    }),
    Bodies.rectangle(225, 175, 28, 28, { 
      restitution: 1,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .1,
          yScale: .1,
          texture: './img/GitIcon.png'
        }
      }
    }),
    Bodies.rectangle(150, 175, 45, 45, { 
      restitution: .75,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .05,
          yScale: .05,
          texture: './img/JavaScript-logo.png'
        }
      }
    }),
    Bodies.circle(50, 175, 30, { 
      restitution: .75,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .02,
          yScale: .02,
          texture: './img/reduxlogo.png'
        }
      }
    }),
    Bodies.circle(100, 250, 25, { 
      restitution: .75,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .02,
          yScale: .02,
          texture: './img/socketio.png'
        }
      }
    }),
    Bodies.rectangle(250, 250, 45, 50, { 
      restitution: .75,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .4,
          yScale: .4,
          texture: './img/firebase.png'
        }
      }
    }),
    Bodies.rectangle(175, 250, 45, 50, { 
      restitution: .75,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .25,
          yScale: .25,
          texture: './img/sql.png'
        }
      }
    }),
    Bodies.circle(125, 100, 25, { 
      restitution: .75,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .2,
          yScale: .2,
          texture: './img/nodejs.png'
        }
      }
    }),
    Bodies.rectangle(200, 100, 50, 20, { 
      restitution: .75,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .02,
          yScale: .02,
          texture: './img/expressjs.png'
        }
      }
    }),
    Bodies.rectangle(225, 100, 45, 20, { 
      restitution: .75,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .015,
          yScale: .015,
          texture: './img/stripe.png'
        }
      }
    }),
    Bodies.rectangle(50, 25, 45, 20, { 
      restitution: .75,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .2,
          yScale: .2,
          texture: './img/moment.png'
        }
      }
    }),
    Bodies.circle(50, 100, 25, { 
      restitution: .75,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .1,
          yScale: .1,
          texture: './img/html.png'
        }
      }
    }),
    Bodies.circle(50, 100, 25, { 
      restitution: .75,
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          xScale: .05,
          yScale: .05,
          texture: './img/css.png'
        }
      }
    }),
  ]);


    World.add(engine.world, [
      Bodies.rectangle(175, -20, 350, 50, { isStatic: true, render:{fillStyle: 'rgb(64,64,64)'} }),
      Bodies.rectangle(175, 370, 350, 50, { isStatic: true, render:{fillStyle: 'rgb(64,64,64)'} }),
      Bodies.rectangle(370, 175, 50, 350, { isStatic: true, render:{fillStyle: 'rgb(64,64,64)'} }),
      Bodies.rectangle(-20, 175, 50, 350, { isStatic: true, render:{fillStyle: 'rgb(64,64,64)'} }),
    ]);

    
    const push = function(engine){
      const bodies = Composite.allBodies(engine.world);
        for (let body of bodies) {
          if(!body.isStatic){
            console.log(body)
            let forceMagnitude = 0.05 * body.mass;
            Body.applyForce(body, body.position, {
              x: forceMagnitude * .05, 
              y: -forceMagnitude + .5 * .05
            });
          }
        }
    }
    push(engine)

    let mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          render: {
            visible: false
          }
        }
      });

    World.add(engine.world, mouseConstraint);

    engine.gravity.y = 0;

    console.log(engine)

    Matter.Runner.run(engine);

    Render.run(render);
  }, [])

    return <div ref={scene} />;
}
export default SkillsBox;