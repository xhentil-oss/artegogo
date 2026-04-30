import { useLanguage } from "@/context/LanguageContext";

export const ContactForm = () => {
  const { t } = useLanguage();
  return (
    <form className="box-border caret-transparent max-w-[500px] outline-[3px] w-full m-auto">
      <h4 className="text-2xl box-border caret-transparent leading-6 max-w-[600px] outline-[3px] mx-auto my-4">
        <strong className="font-bold box-border caret-transparent outline-[3px]">
          {t("Qendrojme ne kontakt", "Stay in touch")}
        </strong>
      </h4>
      <p className="text-[17px] font-medium box-border caret-transparent leading-6 outline-[3px] mb-12">
        {t("Rregjistrohu per te marre Email dhe perditesime", "Subscribe to receive emails and updates")}
      </p>
      <fieldset className="box-border caret-transparent outline-[3px] p-0">
        <div className="box-border caret-transparent outline-[3px]">
          <label className="text-gray-500 text-[17px] box-border caret-transparent block leading-[17px] outline-[3px] text-left mb-2">
            {t("Email Address", "Email Address")}
          </label>
          <input type="email" name="email"
            className="appearance-none text-black text-sm box-border caret-transparent leading-6 outline-[3px] text-start w-full border border-zinc-200 mb-6 px-4 py-2 rounded-[5px] border-solid font-arial" />
        </div>
        <div className="box-border caret-transparent flex outline-[3px] mb-4">
          <input type="checkbox" name="consent"
            className="text-black text-[13.3333px] bg-transparent box-border caret-transparent block leading-[normal] min-h-[auto] min-w-[auto] outline-[3px] text-start overflow-visible ml-1 mr-3 my-[3px] p-0 font-arial" />
          <label className="text-gray-500 text-[17px] box-border caret-transparent block leading-[17px] min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2">
            {t("Duke klikuar ketu ti pranon te rregjistrohesh per te marre Email", "By clicking here you agree to subscribe to receive emails")}
          </label>
        </div>
      </fieldset>
      <button type="submit"
        className="text-white text-base font-bold bg-amber-200 caret-transparent leading-6 min-w-[250px] outline-[3px] border px-[18px] py-[13px] rounded-3xl border-transparent">
        {t("Rregjistrohu", "Subscribe")}
      </button>
      <p className="text-sm font-medium box-border caret-transparent leading-6 outline-[3px] m-6">
        {t("Respektoj privatesine tuaj.", "We respect your privacy.")}
      </p>
      <div className="text-red-600 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] mx-auto my-6"></div>
    </form>
  );
};
