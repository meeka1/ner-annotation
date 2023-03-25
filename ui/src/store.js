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
           name: "PIN",
         },
         {
           color: "#bdff96",
           id: 2,
           name: "PLACEOFBIRTH",
         },
         {
           color: "#96ffee",
           id: 3,
           name: "PLACEOFISSUE",
         },
         {
           color: "#96bbff",
           id: 4,
           name: "MRZ",
         },
       ],
       inputSentences: [],
       annotations: [],
       currentClass: {
         color: "#eeff96",
         id: 1,
         name: "PIN"
       },
     };
   },
  getters,
  mutations,
  actions: {},
};
