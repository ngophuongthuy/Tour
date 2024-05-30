import AsiderManagement from "./components/AsiderManagement";
import HeaderManagement from "./components/HeaderManagement";

function MainAdmin({ children }: { children: any }): JSX.Element {
  return (
    <div className="flex   ">
      <div className="w-full">
        <HeaderManagement />
        <div className="flex">
          <div className="flex-none" >
            <AsiderManagement />
          </div>
          <div className="flex-grow m-2" >
            <div className="bg-gray-200 text-black border border-gray-300 rounded-md w-full h-full ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainAdmin;
