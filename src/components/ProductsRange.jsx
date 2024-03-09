import GeneralButton from "./GeneralButton";

const ProductsRange = () => {
  return (
    <div className="-z-50">
      <div className="relative bg-neutral-700 py-8 px-12 text-white">
        <div className="flex flex-col">
          <span className="text-2xl">25Mbps Fiber Ethernet</span>
          <span className="text-4xl font-semibold">$360</span>
        </div>
        <div className="absolute z-10 left-72">
          <GeneralButton>Get Started Now</GeneralButton>
        </div>
      </div>
      <div className="relative bg-neutral-500 py-8 px-6 text-white">
        <div className="flex flex-col">
          <span className="text-2xl">25Mbps Fiber Ethernet</span>
          <span className="text-4xl font-semibold">$360</span>
        </div>
        <div className="absolute z-10 left-72">
          <GeneralButton>Get Started Now</GeneralButton>
        </div>
      </div>
      <div className="relative bg-neutral-700 py-8 px-6 text-white">
        <div className="flex flex-col">
          <span className="text-2xl">25Mbps Fiber Ethernet</span>
          <span className="text-4xl font-semibold">$360</span>
        </div>
        <div className="absolute z-10 left-72">
          <GeneralButton>Get Started Now</GeneralButton>
        </div>
      </div>
      <div className="relative bg-neutral-500 py-8 px-6 text-white">
        <div className="flex flex-col">
          <span className="text-2xl">25Mbps Fiber Ethernet</span>
          <span className="text-4xl font-semibold">$360</span>
        </div>
        <div className="absolute z-10 left-72">
          <GeneralButton>Get Started Now</GeneralButton>
        </div>
      </div>
    </div>
  );
};

export default ProductsRange;
