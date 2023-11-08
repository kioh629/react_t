function Sample(){
    return(
        <>
            <SkipComponent/>
            <Header/>
            <WrapComponent/>
            <Footer/>
        </>
    )
}

// Skip
function SkipComponent() {
    return (
        <>
            <ul className="skip">
                <li><a href="#main">콘텐츠바로가기</a></li>

            </ul>
        </>
    )
}

// Header
function Header() {
    return (
        <>
            <header>
                <h1><a href="#">SAMPLE</a></h1>
            </header>
        </>
    )
}

// Wrap
function WrapComponent() {
    return(
        <>
            <MainComponent/>
        </>
    )
}

// main
function MainComponent(){
    return(   
    <>
        <div id="menubox">
            <nav id="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">BRAND</a></li>
                    <li><a href="#">STORY</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
            <div className="submenu">
                <div className="box">
                    <ul>
                        <li><a href="#">LIST</a></li>
                        <li><a href="#">LIST</a></li>
                        <li><a href="#">LIST</a></li>
                        <li><a href="#">LIST</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">LIST</a></li>
                        <li><a href="#">LIST</a></li>
                        <li><a href="#">LIST</a></li>
                        <li><a href="#">LIST</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">LIST</a></li>
                        <li><a href="#">LIST</a></li>
                        <li><a href="#">LIST</a></li>
                        <li><a href="#">LIST</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">LIST</a></li>
                        <li><a href="#">LIST</a></li>
                        <li><a href="#">LIST</a></li>
                        <li><a href="#">LIST</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <section id="banner">
            <div><img src="img/p_main1.jpg" alt="ban"></img></div>
            <div><img src="img/p_main1.jpg" alt="ban"></img></div>
        </section>
        <section id="main">
            <h2>LIST</h2>
            <ul>
                <li><a href="#"><img src="img/mpr1.png" alt="1"></img></a></li>
                <li><a href="#"><img src="img/mpr2.png" alt="2"></img></a></li>
                <li><a href="#"><img src="img/mpr3.png" alt="3"></img></a></li>
                <li><a href="#"><img src="img/mpr4.png" alt="4"></img></a></li>
            </ul>
        </section>
        <section id="main1">
            <h2>LIST</h2>
            <ul>
                <li><a href="#"><img src="img/ppr1.png" alt="1"></img></a></li>
                <li><a href="#"><img src="img/ppr2.png" alt="2"></img></a></li>
                <li><a href="#"><img src="img/ppr3.png" alt="3"></img></a></li>
                <li><a href="#"><img src="img/ppr4.png" alt="4"></img></a></li>
            </ul>
        </section>
        <section id="ban">
            <img src="img/p_bn"></img>
        </section>
        <section id="main2">
            <h2>LIST</h2>
            <ul>
                <li><a href="#"><img src="img/ppr1.png" alt="1"></img></a></li>
                <li><a href="#"><img src="img/ppr2.png" alt="2"></img></a></li>
                <li><a href="#"><img src="img/ppr3.png" alt="3"></img></a></li>
                <li><a href="#"><img src="img/ppr4.png" alt="4"></img></a></li>
            </ul>
        </section>
    </>
    )
}

// Footer
function Footer(){
    return (
        <>
            <footer>
                FOOTER
            </footer>
        </>
    );
}

ReactDOM.render(
    <Sample/>,
    document.getElementById("root")
)
