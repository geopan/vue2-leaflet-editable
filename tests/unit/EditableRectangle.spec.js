import { mount } from "@vue/test-utils";
import EditableRectangle from "@/components/EditableRectangle";

describe("EditableRectangle", () => {
  it("renders props.editable when passed", () => {
    const editable = true;
    const wrapper = mount(EditableRectangle, {
      propsData: { editable }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
