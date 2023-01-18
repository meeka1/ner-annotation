const niceColors = [
  "#eeff96",
  "#bdff96",
  "#96ffee",
  "#96bbff",
  "#be96ff",
  "#ff9696",
  "#8d8885",
  "#8b9dc3",
  "#a0c0e0",
  "#ffd571",
  "#085838",
  "#ffcd94",
  "#baffc9",
  "#ff6f69",
  "#4deeea",
  "#ffe700",
  "#43e8d8",
  "#b0bf1a"
];

export const mutations = {
  setInputSentences(state, payload) {
    if (!Array.isArray(payload)) {
      state.originalText = payload;
      payload = payload.split(state.separator);
    }
    state.inputSentences = payload.map((s, i) => ({ id: i, text: s }));
  },
  addClass(state, payload) {
    let existing = state.classes.find((c) => c.name == payload);
    if (existing) {
      return;
    }
    let lastIndex = state.classes.reduce((p, c) => {
      return c.id > p ? c.id : p;
    }, 0);
    state.classes.push({
      id: lastIndex + 1,
      name: payload,
      color: niceColors[lastIndex % niceColors.length],
    });
    if (state.classes.length === 1) {
      state.currentClass = state.classes[0];
    }
  },
  removeClass(state, payload) {
    state.classes = state.classes.filter((c) => c.id != payload);
    if (state.currentClass.id === payload) {
      state.currentClass = state.classes[0];
    }
  },
  setCurrentClass(state, payload) {
    state.currentClass = state.classes.find((c) => c.id === payload);
  },
  addAnnotation(state, payload) {
    state.annotations.push(payload);
  },
  setSeparator(state, payload) {
    state.separator = payload;
    const sentences = state.originalText.split(state.separator);
    state.inputSentences = sentences.map((s, i) => ({ id: i, text: s }));
  },
};

export const getters = {};
export default {
  state() {
    return {
      originalText: "",
      separator: "########",
      classes: [
        {
          color: "#eeff96",
          id: 1,
          name: "LNAME-1",
        },
        {
          color: "#bdff96",
          id: 2,
          name: "FNAME-1",
        },
        {
          color: "#96ffee",
          id: 3,
          name: "MNAME",
        },
        {
          color: "#96bbff",
          id: 4,
          name: "BIRTHPLACE-1",
        },
        {
          color: "#be96ff",
          id: 5,
          name: "GENDER-1",
        },
        {
          color: "#ff9696",
          id: 6,
          name: "BIRTHDATE-1",
        },
        {
          color: "#8d8885",
          id: 7,
          name: "NATIONALITY-1",
        },
        {
          color: "#8b9dc3",
          id: 8,
          name: "PLACEOFISSUE",
        },
        {
          color: "#a0c0e0",
          id: 9,
          name: "PASSPORTNUMBER",
        },
        {
          color: "#ffd571",
          id: 10,
          name: "DATEOFISSUE",
        },
        {
          color: "#085838",
          id: 11,
          name: "DATEOFEXPIRY",
        },
        {
          color: "#ffcd94",
          id: 12,
          name: "LNAME-2",
        },
        {
          color: "#baffc9",
          id: 13,
          name: "FNAME-2",
        },
        {
          color: "#ff6f69",
          id: 14,
          name: "BIRTHPLACE-2",
        },
        {
          color: "#4deeea",
          id: 15,
          name: "GENDER-2",
        },
        {
          color: "#ffe700",
          id: 16,
          name: "BIRTHDATE-2",
        },
        {
          color: "#43e8d8",
          id: 17,
          name: "NATIONALITY-2",
        },
        {
          color: "#b0bf1a",
          id: 18,
          name: "MRZ",
        },
      ],
      inputSentences: [],
      annotations: [],
      currentClass: {
        color: "#eeff96",
        id: 1,
        name: "LNAME"
      },
    };
  },
  getters,
  mutations,
  actions: {},
};
