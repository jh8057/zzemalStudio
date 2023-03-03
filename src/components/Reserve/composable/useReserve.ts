import { toRefs, reactive } from "vue";

export function useReserve() {
  const state = reactive({
    foo: 1,
    bar: 2,
  });

  // expose managed state as return value
  return toRefs(state);
}
