export default function AboutLayout({children}:{children : React.ReactNode}){
    return(
        <div>
            <h1>ABOUT LAYOUT</h1>
            <div className="p-4 border rounded shadow-sm bg-white">
            {children}
            </div>
        </div>
    )
}
