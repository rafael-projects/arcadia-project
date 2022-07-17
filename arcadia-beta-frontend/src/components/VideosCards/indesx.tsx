
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import NotificationButton from '../NotificationButton'
import './styles.css'


function VideosCards() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);



    return (
        <div className="videos-card">
            <h2 className="videos-titles">Videos</h2>
            <div>
                <div className="video-form-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="video-form"
                        dateFormat="dd/MM/yy"
                    />
                </div>
                <div className="video-form-container">
                <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="video-form"
                        dateFormat="dd/MM/yy"
                    />
                </div>
            </div>

            <div>
                <table className="table-classification">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show992">Data Postagem</th>
                            <th>Jogadores</th>
                            <th className="show992">Pontuação</th>
                            <th className="show992">Ranking</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">13/07/2022</td>
                            <td>RafaelZeroWins</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>55300-pts</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>


                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">13/07/2022</td>
                            <td>RafaelZeroWins</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>55300-pts</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">13/07/2022</td>
                            <td>RafaelZeroWins</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>55300-pts</td>
                            <td>
                                <div className="red-btn-container">
                                    <div className="red-btn">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">13/07/2022</td>
                            <td>RafaelZeroWins</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>55300-pts</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>


                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">13/07/2022</td>
                            <td>RafaelZeroWins</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>55300-pts</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">13/07/2022</td>
                            <td>RafaelZeroWins</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>55300-pts</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default VideosCards
