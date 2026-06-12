

export const Hero = () =>{
    return(<section className="relative min-h-screen flex items-center overflow-hidden">
        {/*Background Image */}
        <div className="absolute inset-0">
            <img src="/hero-bg.jpg" alt="Hero Image" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 from-background/20 via-background/80 to-background"/>
        </div>
        {/*Green dots*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_,i) =>(
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor : "#20B2A6",
                    left:`${Math.random() * 100}%`,
                    right:`${Math.random() * 100}%`,
                    animation:`slow-drift 1s`,


                }}/>
            ))}
        </div>

    </section>)
}