import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {fValue, spacing} from 'core/utils/ui';
import {useAppDispatch} from 'reduxStore/hooks';
import {signIn, signInFake} from 'features/auth/redux/authSlice';
import {Toast} from 'core/utils/toast';

type FormData = {
  username: string;
  password: string;
};

export const SignInScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormData) => {
    //const resultAction = await dispatch(signIn(data));
    const resultAction = await dispatch(signInFake(data));
    if (signIn.rejected.match(resultAction)) {
      Toast.error({
        title: 'Authentication Error.',
        message: "Connection to the server can't be made",
      });
    }
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.root}>
        <TouchableOpacity style={[styles.button]} onPress={() => onSubmit}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing(2),
  },
  button: {
    borderRadius: spacing(0.5),
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(1),
    backgroundColor: '#000',
    textAlign: 'center',
    fontSize: fValue(24),
  },
  disabledButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: fValue(16),
  },
});
