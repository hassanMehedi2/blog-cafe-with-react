import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="md:flex justify-between items-center m-5 px-10">
               <h1 className='text-3xl bg-green-200'>Bolg-cafe</h1>
               <img src={profile} alt="" />
        </div>
    );
};

export default Header;