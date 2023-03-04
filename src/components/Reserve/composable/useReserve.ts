import { toRefs, reactive } from "vue";

export function useReserve() {
  const state = reactive({
    userName: null,
    phone: null,
    time: null,
    peopleNum: null,
    purpose: null,
    etc: null,
  });

  // expose managed state as return value
  return toRefs(state);
}
