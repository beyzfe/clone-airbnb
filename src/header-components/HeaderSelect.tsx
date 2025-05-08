import { useState } from "react";
import { Check } from "lucide-react";

function HeaderSelect() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div
        onClick={handleToggle}
        className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 text-sm cursor-pointer select-none hover:bg-gray-100 hover:border-black "
      >
        Vergiler hariç toplamı göster
        <div
          className={`w-10 h-6 rounded-full relative transition-all duration-300 ${
            isChecked ? "bg-black" : "bg-gray-300"
          }`}
        >
          <div
            className={`absolute top-1 w-4 h-4 bg-white rounded-full flex items-center justify-center transition-transform duration-300 ${
              isChecked ? "translate-x-5" : "translate-x-1"
            }`}
          >
            <Check
              className={`w-3 h-3 transition-opacity duration-200 ${
                isChecked ? "opacity-100 text-white" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSelect;
