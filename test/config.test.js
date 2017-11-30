import { Meteor } from 'meteor/meteor';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

if (Meteor.isClient) {
  configure({ adapter: new Adapter() });
}
