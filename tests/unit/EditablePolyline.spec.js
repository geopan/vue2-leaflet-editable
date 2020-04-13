import { mount } from "@vue/test-utils";
import EditablePolyline from "@/components/EditablePolyline";

describe("EditablePolyline", () => {
  it("renders props.editable when passed", () => {
    const editable = true;
    const wrapper = mount(EditablePolyline, {
      propsData: { editable }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
