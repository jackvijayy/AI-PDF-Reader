import Header from "@/app/dashboard/_components/Header"
import Sidebar from "@/app/dashboard/_components/Sidebar"

const DashBoardLayout = ({ children }) => {
  return (
    <div>
        <div className="md:w-64 h-screen fixed">
            <Sidebar/>
        </div>
        <div className="md:ml-80">
            <Header/>
            <div className="p-10">
            {children}
            </div>
        </div>
    </div>
    


  )
}

export default DashBoardLayout