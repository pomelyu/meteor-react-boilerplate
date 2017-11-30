import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import App from '../../imports/ui/components/App.jsx';

describe('App test', () => {
  it('should mount normally', () => {
    const wrapper = mount(<App count={3} setCounterCount={()=>{}} />);

    // Expect the 'Click Me' button is existed
    expect(wrapper.find('button')).to.have.length(1);
  });
});
