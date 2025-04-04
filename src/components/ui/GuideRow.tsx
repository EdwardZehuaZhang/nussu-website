type Guide = {
  title: string;
  description: string;
  href: string;
  pdf: string;
};

interface GuideRowProps {
  guide: Guide;
  index: number;
}

const GuideRow: React.FC<GuideRowProps> = ({ guide, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? "tablet:flex-row" : "tablet:flex-row-reverse"} p-8 tablet:p-0 items-center justify-between py-4 tablet:py-8 laptop:py-12 bg-white m-auto`}>
      <div>
        <img src={guide.href} alt={guide.title} className="w-full h-auto tablet:w-[358px] tablet:h-[268.5px] laptop:w-[579px] laptop:h-[434.25px] rounded-lg object-cover block transition-transform duration-300 ease-in-out transform hover:scale-105" />
      </div>
      <div className={`${isEven ? "tablet:pl-16" : "tablet:pr-16"} py-4 tablet:w-[330px] laptop:w-[579px] ${isEven ? "text-left items-start" : "tablet:text-right tablet:items-end"} flex flex-col justify-center `}>
        <h2 className="text-[50px] tablet:text-[28px] laptop:text-[50px] font-sansbold mb-4">{guide.title}</h2>
        <p className="text-[24px] tablet:text-[20px] laptop:text-[24px] font-sans text-[#808080] mb-6">{guide.description}</p>
        <a
          href={guide.pdf}
          download
          className="font-sans inline-flex w-fit px-6 py-4 bg-black text-white rounded-[50px] hover:bg-[#222222] transition duration-700"
        >
          Download (PDF)
        </a>
      </div>
    </div>
  );
};

export default GuideRow;