import React from "react";

const Sec4: React.FC = () => {
  return (
    <div className="bg-[#f4f4f4] text-black py-16 px-8 min-h-fit border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Technologies Supported <br /> by Numbers.</h2>

        </div>

        <div>
          <p className="text-gray-600">
            Our knowledge and experience ensure stable  <br />work and growth of our partners.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-4xl font-bold">$101M</h3>
              <p className="text-gray-600">We’ve Achieved in Series A</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">2 billion</h3>
              <p className="text-gray-600">Parameters of SD 3 Medium</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">200K+</h3>
              <p className="text-gray-600">Participants Enhancing Models</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">10M</h3>
              <p className="text-gray-600">Models Downloads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec4;
