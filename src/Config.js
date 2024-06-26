import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim"; 

const Config= ({ enableParticles, children }) => {
    const [ init, setInit ] = useState(false);

   
    useEffect(() => {
        initParticlesEngine(async (engine) => {
        
            await loadSlim(engine);
          
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
    const containerStyle = {
        position: 'absolute', 
        top: 0,
        left: 0,
        width: '100%',
        height: '300px', 
        zIndex: -1, 
    };

    return (
        <>{
            <Particles style={containerStyle}
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                canvas:{
                    size:{
                        height:200
                    },
                },
                background: {
                    color: {
                        value: "#00000",
                    },
                    fullScreen:{
                        enable:false
                    }
                },
                fpsLimit: 100,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 8,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#e913b9",
                    },
                    links: {
                        color: "#0dbbfd",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 150,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "hexagon",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        }
      
       

</>
)
    
};

export default Config