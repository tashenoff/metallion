import React, { useContext } from "react";
import { TranslationContext } from "../TranslationContext";

const translations = {
  ru: {
    title: "Характеристики и результаты испытаний растительного масла",
    tableHeaders: [
      "Наименование показателей",
      "Нормативная документация",
      "Результаты испытаний",
    ],
    sections: [
      {
        sectionTitle: "1. Органолептические показатели",
        rows: [
          ["- запах и вкус", "ГОСТ 5472", "Свойственный маслу подсолнечному"],
          ["- прозрачность", "ГОСТ 5472", "Прозрачное без осадка"],
        ],
      },
      {
        sectionTitle: "II. Физико-химические показатели",
        rows: [
          [
            "1. Массовая доля влаги и летучих веществ, %, не более",
            "ГОСТ 11812",
            "0,05",
          ],
          ["2. Кислотное число, мг КОН/г, не более", "ГОСТ 31933", "0,18"],
          ["3. Пероксидное число, ½ ммоль О/кг", "ГОСТ 26593", "1,5"],
          [
            "4. Массовая доля нерастворимых примесей, %",
            "ГОСТ 5481",
            "Отсутствует",
          ],
          ["5. Массовая доля неомыляемых веществ", "ГОСТ 5479", "0,55"],
          [
            "6. Массовая доля фосфорсодержащих веществ, %, не более",
            "ГОСТ 31753",
            "Отсутствует",
          ],
          ["7. Цветное число, мг йода, не более", "ГОСТ 5477", "4,84"],
          ["8. Холодный тест", "—", "Выдерживает"],
          ["9. Анисидиновое число", "ГОСТ 31756", "2,0"],
          ["10. Содержание олеиновой кислоты, %", "ГОСТ 30418", "22,79"],
        ],
      },
      {
        sectionTitle: "III. Прочие показатели",
        rows: [
          ["Свинец, мг/кг", "ГОСТ 30178", "Менее 0,02"],
          ["Кадмий, мг/кг", "ГОСТ 30178", "Менее 0,01"],
          ["Мышьяк, мг/кг", "ГОСТ 26930", "Менее 0,01"],
          ["Ртуть, мг/кг", "МУ 5178", "Менее 0,0005"],
          ["Медь, мг/кг", "ГОСТ 30178", "0,052"],
          ["Железо, мг/кг", "ГОСТ 30178", "Менее 0,1"],
          [
            "Гексахлорциклогексан (альфа, бета, гамма-изомеры), мг/кг",
            "МУ 2142",
            "Менее 0,001",
          ],
          ["ДДТ и его метаболиты, мг/кг", "МУ 2142", "Менее 0,001"],
          ["Цезий 137, Бк/кг", "МУК 2.6.1.1194", "Менее 3,0"],
          ["Стронций 90, Бк/кг", "МУК 2.6.1.1194", "Менее 1,4"],
          ["Промотор 35S", "ГОСТ Р 52173", "Отсутствует"],
          ["Терминатор NOS", "ГОСТ Р 52173", "Отсутствует"],
        ],
      },
    ],
  },
  en: {
    title: "Characteristics and Test Results of Vegetable Oil",
    tableHeaders: [
      "Indicator Name",
      "Regulatory Documentation",
      "Test Results",
    ],
    sections: [
      {
        sectionTitle: "1. Organoleptic Indicators",
        rows: [
          ["- smell and taste", "GOST 5472", "Characteristic of sunflower oil"],
          ["- transparency", "GOST 5472", "Transparent without sediment"],
        ],
      },
      {
        sectionTitle: "II. Physicochemical Indicators",
        rows: [
          [
            "1. Mass fraction of moisture and volatile substances, %, no more than",
            "GOST 11812",
            "0.05",
          ],
          ["2. Acid number, mg KOH/g, no more than", "GOST 31933", "0.18"],
          ["3. Peroxide number, ½ mmol O/kg", "GOST 26593", "1.5"],
          [
            "4. Mass fraction of insoluble impurities, %",
            "GOST 5481",
            "Absent",
          ],
          ["5. Mass fraction of unsaponifiable substances", "GOST 5479", "0.55"],
          [
            "6. Mass fraction of phosphorus-containing substances, %, no more than",
            "GOST 31753",
            "Absent",
          ],
          ["7. Color number, mg iodine, no more than", "GOST 5477", "4.84"],
          ["8. Cold test", "—", "Passes"],
          ["9. Anisidine number", "GOST 31756", "2.0"],
          ["10. Oleic acid content, %", "GOST 30418", "22.79"],
        ],
      },
      {
        sectionTitle: "III. Other Indicators",
        rows: [
          ["Lead, mg/kg", "GOST 30178", "Less than 0.02"],
          ["Cadmium, mg/kg", "GOST 30178", "Less than 0.01"],
          ["Arsenic, mg/kg", "GOST 26930", "Less than 0.01"],
          ["Mercury, mg/kg", "MU 5178", "Less than 0.0005"],
          ["Copper, mg/kg", "GOST 30178", "0.052"],
          ["Iron, mg/kg", "GOST 30178", "Less than 0.1"],
          [
            "Hexachlorocyclohexane (alpha, beta, gamma isomers), mg/kg",
            "MU 2142",
            "Less than 0.001",
          ],
          ["DDT and its metabolites, mg/kg", "MU 2142", "Less than 0.001"],
          ["Cesium 137, Bq/kg", "MUK 2.6.1.1194", "Less than 3.0"],
          ["Strontium 90, Bq/kg", "MUK 2.6.1.1194", "Less than 1.4"],
          ["Promoter 35S", "GOST R 52173", "Absent"],
          ["Terminator NOS", "GOST R 52173", "Absent"],
        ],
      },
    ],
  },
};

const OilSpecificationsTable = () => {
  const { language } = useContext(TranslationContext);
  const { title, tableHeaders, sections } = translations[language];

  return (
    <>
      <div className="bg-black text-primary-content flex items-center justify-center py-10 h-[200px]">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
      </div>
      <div className="container mx-auto bg-white relative -top-10">
        <div className="overflow-x-auto p-4 bg-base-100">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                {tableHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sections.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  <tr>
                    <td colSpan="3" className="font-bold">
                      {section.sectionTitle}
                    </td>
                  </tr>
                  {section.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OilSpecificationsTable;
