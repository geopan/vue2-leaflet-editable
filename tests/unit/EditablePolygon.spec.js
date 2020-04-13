import { mount } from "@vue/test-utils";
import EditablePolygon from "@/components/EditablePolygon";

describe("EditablePolygon", () => {
  it("renders props.editable when passed", () => {
    const editable = true;
    const wrapper = mount(EditablePolygon, {
      propsData: { editable }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
