import natureImg from'../../assets/images/webp/nature.webp'

const Header = () => {
    return (
        <>
            <div>
                <h2 className="text-red-400 text-[35px] text-center font-semibold pt-10">Hello World</h2>
                <img src={natureImg} alt="nature" className='max-w-[600px] mx-auto pt-10'/>
            </div>
        </>
      )
}
export default Header