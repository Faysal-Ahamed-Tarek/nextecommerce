import { useDispatch } from "react-redux";
import { NameSearch_Action } from './../../../redux/action';

const NameSearch = () => {
  const Dispatch = useDispatch();
  
  //Search Value
  const NameValue = (e) => {
    Dispatch(NameSearch_Action(e.target.value))
  }

  return (
    <>
      <div className="pb-3">
        <h1 className="text-xl pt-2 pb-2 text-purple-700">Product Name</h1>
        <input type="text" onChange={NameValue} placeholder="Search by Product name" className="w-full p-3 rounded outline-none" />
      </div>
    </>
  );
};
export default NameSearch;