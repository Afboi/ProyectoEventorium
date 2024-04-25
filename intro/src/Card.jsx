import './index.css'
export function Card(){
    return(
        <div className="rounded-lg shadow-lg">
            <img className="rounded-t-lg" src="https://blog.logrocket.com/wp-content/uploads/2022/07/useevent-hook-react-rfc.png" alt="event" />
            <div className="p-4">
                <h4 className="font-bold text-sm">UI/UX</h4>
                <p className="font-normal text-xs text-gray-800">40+ events</p>
            </div>
        </div>
    )
}