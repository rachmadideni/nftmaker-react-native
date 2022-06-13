/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import { View } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import ModalPickerImage from './ModalPickerImage';
import styles from './mobile-input-text.styles';
import { theme } from '../../theme';
import { Text, Touchable } from '..';
import { Icon } from 'native-base';

const { colors } = theme;

class MobileInputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
  }

  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData(),
    });
  }

  onPressFlag() {
    this.myCountryPicker.open();
  }

  selectCountry(country) {
    this.phone.selectCountry(country.iso2.toLowerCase());
    this.props?.onSelectCountry(country.iso2.toLowerCase(), country.dialCode);
    this.setState({ iso2: country.iso2 });
  }

  render() {
    const { disabled, placeholder, iso2, dialCode, value, onChangeText } = this.props;
    return (
      <>
        <View style={styles.container}>
          <PhoneInput
            ref={(ref) => {
              this.phone = ref;
            }}
            initialCountry={iso2}
            onPressFlag={this.onPressFlag}
            autoFormat
            textProps={{
              placeholder,
              style: styles.inputStyle,
              placeholderTextColor: colors.gray5,
              value,
              onChangeText,
              keyboardType: 'phone-pad',
            }}
            offset={0.1}
            flagStyle={styles.flagStyle}
            disabled={disabled}
          />
          <Touchable onPress={this.onPressFlag} style={styles.dialCodeContainer}>
            <View style={styles.dialCodeRow}>
              <Icon name="chevron-down" type="Entypo" style={styles.dialCodeIcon} />
              <View style={styles.dialCodeSeperator} />
              <Text style={styles.dialCodeText}>{dialCode}</Text>
            </View>
          </Touchable>
        </View>
        <ModalPickerImage
          ref={(ref) => {
            this.myCountryPicker = ref;
          }}
          data={this.phone?.getPickerData()}
          onChange={(country) => {
            this.selectCountry(country);
          }}
          cancelText="Cancel"
        />
      </>
    );
  }
}

export default MobileInputText;
