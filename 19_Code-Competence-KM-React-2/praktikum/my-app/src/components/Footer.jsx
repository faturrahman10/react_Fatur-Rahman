const Footer = () => {
  return (
    <div>
      <div className="bg-green-600" id="footer">
        <div className="flex justify-between px-[10%] py-5">
          <div className="">
            <p className="text-white text-3xl font-bold">Fatur <span className="text-[#3f3f46]">Dev</span></p>
          </div>
          <div className="text-white">
            <p className="text-xl font-semibold mb-3">Lets be Friend</p>
            <div className="flex gap-5">
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100005799945638" rel="noreferrer">
                <img src="/img/facebook.png" alt="" />
              </a>
              <a target="_blank" href="https://github.com/faturrahman10" rel="noreferrer">
                <img src="/img/github.png" alt="" />
              </a>
              <a target="_blank" href="https://www.instagram.com/10fatur_rahman/" rel="noreferrer">
                <img src="/img/instagram.png" alt="" />
              </a>
            </div>
          </div>
          <div className="text-white">
            <p className="text-xl font-semibold mb-3">You can Find me here</p>
            <div>
              <div className="mb-3">
                <p>+6285340305544</p>
              </div>
              <div>
                <p>Jl.Batur No.14 Bukit Baruga Antang Makassar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Footer