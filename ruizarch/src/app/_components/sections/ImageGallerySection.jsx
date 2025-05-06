import Data from "@data/sections/latest-projects.json";

const chunkProjects = (projects = [], chunkSize = 3) => {
  const chunks = [];
  for (let i = 0; i < Math.min(Data.numOfItems, projects.length); i += chunkSize) {
    chunks.push(projects.slice(i, i + chunkSize));
  }
  return chunks;
};

const ImageGallerySection = ({ projects = [] }) => {
  const groupedProjects = chunkProjects(projects);
  const projectRows = [];

  groupedProjects.forEach((group) => {
    if (group.length >= 2) {
      projectRows.push(group.slice(0, 2));
    }
    if (group.length === 3) {
      projectRows.push([group[2]]);
    }
  });

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {projectRows.map((row, rowIndex) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={`row-${rowIndex}`}>
              {row.map((item, itemIndex) => (
                <div
                  key={`item-${itemIndex}`}
                  className={`overflow-hidden rounded-2xl shadow-lg transition-all duration-300 mb-4 group ${
                    row.length === 2 ? "aspect-square" : "aspect-[2/3]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;