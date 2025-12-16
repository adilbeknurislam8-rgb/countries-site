const countries = [
  // ===== АЗИЯ =====
  {
    name: "Казахстан",
    continent: "Азия",
    capital: "Астана",
    population: "19 млн",
    currency: "Тенге",
    fact: "Казахстан — крупнейшая страна без выхода к океану.",
    flag: "https://flagcdn.com/w320/kz.png"
  },
  {
    name: "Китай",
    continent: "Азия",
    capital: "Пекин",
    population: "1,4 млрд",
    currency: "Юань",
    fact: "Китай — самая населённая страна мира.",
    flag: "https://flagcdn.com/w320/cn.png"
  },
  {
    name: "Япония",
    continent: "Азия",
    capital: "Токио",
    population: "125 млн",
    currency: "Иена",
    fact: "В Японии более 6800 островов.",
    flag: "https://flagcdn.com/w320/jp.png"
  },
  {
    name: "Индия",
    continent: "Азия",
    capital: "Нью-Дели",
    population: "1,4 млрд",
    currency: "Рупия",
    fact: "Индия — крупнейшая демократия мира.",
    flag: "https://flagcdn.com/w320/in.png"
  },
  {
    name: "Южная Корея",
    continent: "Азия",
    capital: "Сеул",
    population: "52 млн",
    currency: "Вон",
    fact: "Южная Корея — один из лидеров IT-технологий.",
    flag: "https://flagcdn.com/w320/kr.png"
  },

  // ===== ЕВРОПА =====
  {
    name: "Франция",
    continent: "Европа",
    capital: "Париж",
    population: "67 млн",
    currency: "Евро",
    fact: "Франция — самая посещаемая страна мира.",
    flag: "https://flagcdn.com/w320/fr.png"
  },
  {
    name: "Германия",
    continent: "Европа",
    capital: "Берлин",
    population: "83 млн",
    currency: "Евро",
    fact: "Германия — крупнейшая экономика Европы.",
    flag: "https://flagcdn.com/w320/de.png"
  },
  {
    name: "Италия",
    continent: "Европа",
    capital: "Рим",
    population: "60 млн",
    currency: "Евро",
    fact: "Рим — один из самых древних городов мира.",
    flag: "https://flagcdn.com/w320/it.png"
  },
  {
    name: "Испания",
    continent: "Европа",
    capital: "Мадрид",
    population: "47 млн",
    currency: "Евро",
    fact: "Испания — мировой лидер по производству оливкового масла.",
    flag: "https://flagcdn.com/w320/es.png"
  },
  {
    name: "Великобритания",
    continent: "Европа",
    capital: "Лондон",
    population: "67 млн",
    currency: "Фунт стерлингов",
    fact: "Великобритания — конституционная монархия.",
    flag: "https://flagcdn.com/w320/gb.png"
  },

  // ===== АФРИКА =====
  {
    name: "Египет",
    continent: "Африка",
    capital: "Каир",
    population: "110 млн",
    currency: "Египетский фунт",
    fact: "В Египте находятся пирамиды Гизы.",
    flag: "https://flagcdn.com/w320/eg.png"
  },
  {
    name: "Нигерия",
    continent: "Африка",
    capital: "Абуджа",
    population: "227 млн",
    currency: "Найра",
    fact: "Нигерия — самая населённая страна Африки.",
    flag: "https://flagcdn.com/w320/ng.png"
  },
  {
    name: "ЮАР",
    continent: "Африка",
    capital: "Претория",
    population: "60 млн",
    currency: "Рэнд",
    fact: "ЮАР имеет 11 официальных языков.",
    flag: "https://flagcdn.com/w320/za.png"
  },
  {
    name: "Марокко",
    continent: "Африка",
    capital: "Рабат",
    population: "37 млн",
    currency: "Дирхам",
    fact: "Марокко омывается Атлантическим океаном и Средиземным морем.",
    flag: "https://flagcdn.com/w320/ma.png"
  },
  {
    name: "Кения",
    continent: "Африка",
    capital: "Найроби",
    population: "55 млн",
    currency: "Кенийский шиллинг",
    fact: "Кения известна своими национальными парками.",
    flag: "https://flagcdn.com/w320/ke.png"
  },

  // ===== СЕВЕРНАЯ АМЕРИКА =====
  {
    name: "США",
    continent: "Северная Америка",
    capital: "Вашингтон",
    population: "331 млн",
    currency: "Доллар США",
    fact: "США состоят из 50 штатов.",
    flag: "https://flagcdn.com/w320/us.png"
  },
  {
    name: "Канада",
    continent: "Северная Америка",
    capital: "Оттава",
    population: "40 млн",
    currency: "Канадский доллар",
    fact: "Канада — вторая по площади страна мира.",
    flag: "https://flagcdn.com/w320/ca.png"
  },
  {
    name: "Мексика",
    continent: "Северная Америка",
    capital: "Мехико",
    population: "129 млн",
    currency: "Песо",
    fact: "Мехико — один из самых крупных городов мира.",
    flag: "https://flagcdn.com/w320/mx.png"
  },
  {
    name: "Куба",
    continent: "Северная Америка",
    capital: "Гавана",
    population: "11 млн",
    currency: "Кубинское песо",
    fact: "Куба известна своими сигарами.",
    flag: "https://flagcdn.com/w320/cu.png"
  },
  {
    name: "Ямайка",
    continent: "Северная Америка",
    capital: "Кингстон",
    population: "3 млн",
    currency: "Ямайский доллар",
    fact: "Ямайка — родина регги.",
    flag: "https://flagcdn.com/w320/jm.png"
  }
];

// ===== ЛОГИКА (без изменений) =====
const continentSelect = document.getElementById("continentSelect");
const countrySelect = document.getElementById("countrySelect");
const card = document.getElementById("countryCard");

function updateCountryList() {
  const continent = continentSelect.value;
  countrySelect.innerHTML = '<option value="">Выберите страну</option>';

  countries
    .filter(c => continent === "all" || c.continent === continent)
    .forEach(c => {
      const option = document.createElement("option");
      option.value = c.name;
      option.textContent = c.name;
      countrySelect.appendChild(option);
    });
}

function showCountry(name) {
  const c = countries.find(c => c.name === name);
  if (!c) return;

  card.innerHTML = `
    <img src="${c.flag}" alt="Флаг">
    <h2>${c.name}</h2>
    <p><b>Столица:</b> ${c.capital}</p>
    <p><b>Население:</b> ${c.population}</p>
    <p><b>Валюта:</b> ${c.currency}</p>
    <p><b>Континент:</b> ${c.continent}</p>
    <p><b>Интересный факт:</b> ${c.fact}</p>
  `;
}

continentSelect.addEventListener("change", updateCountryList);
countrySelect.addEventListener("change", () => {
  showCountry(countrySelect.value);
});

updateCountryList();
