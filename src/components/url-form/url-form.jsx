import React, { Component } from 'react';
import { Form, Text } from 'react-form';

import * as styles from './url-form.css';

class UrlForm extends Component {

    render() {
        return (
            <div className={styles.container}>
                <Form>
                    <Text field="firstName" placeholder='ex: https://www.youtube.com/watch?v=A71aqufiNtQ&t=49s' />
                </Form>
            </div>
        );
    }
}
export default UrlForm;