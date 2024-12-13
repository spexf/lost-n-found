import Sidebar from "@/app/_components/adminComponents/Sidebar/page"

const Page = ({params}: {params: {id: number}})=>{
    console.log(params.id)

    return (
        <div className="page w-screen h-screen flex">
      {/* Sidebar */}
      <div className="fixed z-0 left-0 top-1/2 -translate-y-1/2 w-64 h-auto  text-white shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-80 z-20 w-[1100px] self-center right-10 h-fit">
        <div className="relative flex-col poppins h-[700px] ml-[85px] px-8 py-4 flex w-full bg-[#2D237A] rounded-[10px]">
            <img src={'http://192.168.100.53:9000/images/lost/1733755094.png'} alt="itemImages" className="w-[500px] h-fit self-center rounded-lg shadow-md" />
            <div className="data flex w-full h-fit my-8">
                <div className="item-data flex-col">
                    <div className="location font-medium text-[25px]">
                        Item lost in 
                        <br />
                        - xxx
                    </div>
                    <div className="description">
                        <textarea name="description" className="w-[450px] bg-[#1A134E] rounded-lg px-2 py-2 h-[280px] " defaultValue={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sint, illum eligendi minima ipsam, dignissimos laudantium saepe fugiat in quo vitae quod tempora? Est commodi fugit necessitatibus quae fugiat nobis sunt facere tempore explicabo, corrupti eum mollitia accusantium nisi itaque pariatur tempora doloribus porro! Perspiciatis, dignissimos tenetur? Fugit perferendis provident minima in consectetur, recusandae maiores harum, inventore asperiores libero suscipit? Illum dolor, eaque quia unde vel tempora assumenda. Eveniet quia, magnam velit illo, ab dolorum nihil sed excepturi blanditiis ad explicabo voluptates error dolore nostrum quam ratione qui doloremque unde? Nisi, maiores. Reprehenderit laudantium rem mollitia, molestias blanditiis consequatur delectus dolor ipsam recusandae soluta. Similique, error. Ab repellat expedita necessitatibus minus? Ab at neque nemo nostrum dolorem. Facilis inventore consequuntur doloremque, quo fugiat sunt! Quibusdam aliquam facilis tempora voluptatum voluptates earum. Quam pariatur modi officia commodi ea explicabo alias excepturi cum, libero eum quos non soluta minima magnam vero culpa, deserunt voluptate fugit delectus provident? Exercitationem nemo architecto, tempore laborum placeat in voluptates voluptatem. Impedit ad aspernatur aperiam sapiente incidunt laborum voluptatibus repudiandae explicabo quia natus molestias esse quibusdam repellendus, sint facere deleniti, voluptatem non quae ut odit doloremque, adipisci nam nihil placeat. Sequi nihil expedita exercitationem numquam doloremque?'} readOnly id="description">
                            
                        </textarea>
                    </div>
                </div>
                <div className="user-data flex-col justify-around ml-8">
                    <div className="sender-name text-[20px]">
                        <tr>
                            <td className="w-[150px]">Sender</td>
                            <td>: Udin</td>
                        </tr>
                    </div>
                    <div className="sender-contact text-[20px]">
                        <tr>
                            <td className="w-[150px]">Email</td>
                            <td>: udin@students.polibatam.ac.id</td>
                        </tr>
                        <tr>
                            <td className="w-[150px]">Phone</td>
                            <td>: 081231939123</td>
                        </tr>
                    </div>
                    <div className="action flex justify-end  w-full">
                        <div className="button-verify w-fit rounded-md cursor-pointer transition-all duration-200 active:bg-emerald-500 hover:bg-emerald-700 px-4 py-2 h-fit text-[20px] mx-3 self-end bg-emerald-600">Verify</div>
                        <div className="button-reject w-fit rounded-md cursor-pointer transition-all duration-200 active:bg-rose-500 hover:bg-rose-800 px-4 py-2 h-fit text-[20px] mx-3 self-end bg-rose-700">Reject</div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
    )
}

export default Page