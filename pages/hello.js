import React from 'react'
import { locale } from '../locales/index'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>{locale.t('hello')}</h1>
                <h2>{locale.t('name',{name: 'วิว'})}</h2>
                <h2>{locale.t('greeting')}</h2>
            </div>
        )
    }
}
