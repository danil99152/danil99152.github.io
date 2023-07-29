import { useState, useEffect } from 'react';

export default function Fireworks() {

    const [fireworks, setFireworks] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFireworks(prev => [...prev, new Firework()]);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {fireworks.map(fw => <FireworkStyle key={fw.id} fw={fw} />)}
        </>
    )
}

// Firework component
function Firework() {

    this.x = Math.random() * 100;
    this.y = Math.random() * 100;
    this.id = Math.random();

    this.fireworkStyle = {
        position: 'absolute',
        left: this.x+'%',
        top: this.y+'%',

        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
    };

}

function FireworkStyle({fw}) {
    return <div style={fw.fireworkStyle}></div>
}