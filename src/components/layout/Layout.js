import Footer from "./Footer"
import Header from "./Header"


function Layout({ children }) {

    const style = { "height": "inherit","minHeight":"400px"}
    
    return (
        <>
            <Header />
            <div style={style}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout