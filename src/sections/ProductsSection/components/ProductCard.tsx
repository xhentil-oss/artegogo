export const ProductCard = () => {
  return (
    <div className="content-end bg-white box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] w-full overflow-hidden mb-6 md:min-h-[auto] md:min-w-[auto]">
      <a
        href="/p/program-udhezues"
        className="text-amber-200 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]"
      >
        <div className="box-border caret-transparent h-[170px] outline-[3px] overflow-hidden">
          <img
            src="https://c.animaapp.com/mo8jie1sg5kjlz/assets/file-uploads.teachablecdn.com.jpg"
            role="presentation"
            className="box-border caret-transparent h-full object-cover outline-[3px] align-baseline w-full"
          />
        </div>
        <div className="content-end box-border caret-transparent flex flex-col h-[225px] justify-end outline-[3px] break-words pt-2 pb-6 px-4">
          <h3
            title="Program Udhezues"
            className="text-lg font-semibold box-border caret-transparent flow-root leading-4 max-h-[60px] min-h-[auto] min-w-[auto] outline-[3px] break-words overflow-hidden mt-4 mb-2"
          >
            Program Udhezues
          </h3>
          <div className="bg-neutral-200 box-border caret-transparent hidden flex-col justify-end outline-[3px] break-words mt-[15px] rounded-[99px]">
            <div
              role="progressbar"
              className="bg-amber-200 box-border caret-transparent h-[15px] outline-[3px] break-words rounded-[99px]"
            ></div>
          </div>
          <h4
            title=""
            className="text-sm font-extralight box-border caret-transparent block leading-[19px] max-h-none min-h-[auto] min-w-[auto] outline-[3px] break-words overflow-visible mb-4 md:flow-root md:max-h-[75px] md:overflow-hidden"
          ></h4>
          <div className="text-[15px] items-end box-border caret-transparent flex grow justify-between leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:leading-[30px]">
            <div className="items-center box-border caret-transparent flex leading-5 min-h-[auto] min-w-[auto] outline-[3px] break-words text-left w-3/5">
              <img
                src="https://c.animaapp.com/mo8jie1sg5kjlz/assets/user-0ae68ba67e6ead32c4ff1cc668d501f896bddd5ef1667ac3e9ff29ce601ed653.png"
                alt="Artemisa Gogollari"
                className="box-border caret-transparent h-[30px] min-h-[auto] min-w-[auto] outline-[3px] break-words align-baseline w-[30px] rounded-[50%]"
              />
              <p
                title="Artemisa Gogollari"
                className="box-border caret-transparent leading-[30px] max-w-[225px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-ellipsis text-nowrap overflow-hidden ml-[5px]"
              >
                Artemisa Gogollari
              </p>
            </div>
            <div className="box-border caret-transparent hidden leading-5 outline-[3px] break-words text-right w-2/5">
              <span className="box-border caret-transparent outline-[3px] break-words">
                %
              </span>
              COMPLETE
            </div>
            <p className="box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] break-words text-right w-2/5 mb-1.5">
              FREE
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};
