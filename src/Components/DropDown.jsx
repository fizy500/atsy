import Dropdown from "../Assets/dropdownArrow.svg";

function DropDown(props) {
  return (
    <div className='flex justify-between cursor-pointer'>
      <p className=' font-medium text-[28px] no '>{props.children}</p>
      <img src={Dropdown} alt='' />
    </div>
  );
}

export default DropDown;
