import { mount } from "@vue/test-utils";
import EditableMap from "@/components/EditableMap";

describe("EditableMap", () => {
  it("renders props.editable when passed", () => {
    const editable = true;
    const wrapper = mount(EditableMap, {
      propsData: { editable }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
