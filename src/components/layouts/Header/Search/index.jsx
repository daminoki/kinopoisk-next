import styles from './Search.module.scss';
import SearchIcon from '../../../../../public/icons/search.svg';
import { debounce } from '@/utils/debounce';
import { useState } from 'react';
import { SearchItem } from '@/components/layouts/Header/Search/SearchItem';

export const Search = () => {
  const [searchResult, setSearchResult] = useState([]);

  const mockResult =
        {
          'docs': [
            {
              'id': 718811,
              'name': 'Прибытие',
              'alternativeName': 'Arrival',
              'enName': '',
              'type': 'movie',
              'year': 2016,
              'description': 'Неожиданное появление неопознанных летающих объектов в разных точках планеты повергает мир в трепет. Намерения пришельцев не ясны — вооружённые силы всего мира приведены в полную боевую готовность, а лучшие умы человечества пытаются понять, как разговаривать с непрошеными гостями. Правительство обращается за помощью к лингвисту Луизе Бэнкс и физику Яну Доннели, чтобы предотвратить глобальную катастрофу и найти общий язык с пришельцами. Отныне судьба человечества находится в их руках.',
              'shortDescription': 'Талантливая лингвистка изучает язык пришельцев, чтобы спасти Землю. Созерцательная фантастика Дени Вильнёва',
              'movieLength': 116,
              'isSeries': false,
              'ticketsOnSale': false,
              'totalSeriesLength': null,
              'seriesLength': null,
              'ratingMpaa': 'pg13',
              'ageRating': 18,
              'top10': null,
              'top250': null,
              'typeNumber': 1,
              'status': null,
              'names': [
                {
                  'name': 'Прибытие'
                },
                {
                  'name': 'Arrival'
                },
                {
                  'name': 'Contact',
                  'language': 'KR',
                  'type': null
                },
                {
                  'name': 'Story of Your Life',
                  'language': 'US',
                  'type': 'working title'
                },
                {
                  'name': 'Ha\'mifgash',
                  'language': 'IL',
                  'type': null
                },
                {
                  'name': 'I Afixi',
                  'language': 'GR',
                  'type': null
                },
                {
                  'name': '어라이벌',
                  'language': 'KR',
                  'type': null
                },
                {
                  'name': 'Premier Contact',
                  'language': 'FR',
                  'type': null
                },
                {
                  'name': 'A Chegada',
                  'language': 'BR',
                  'type': null
                },
                {
                  'name': 'Arrival - Warum sind sie hier?',
                  'language': 'DE',
                  'type': null
                },
                {
                  'name': 'La llegada',
                  'language': 'MX',
                  'type': null
                },
                {
                  'name': 'La Llegada',
                  'language': 'ES',
                  'type': null
                },
                {
                  'name': 'L\'arrivée',
                  'language': 'CA',
                  'type': 'Français'
                },
                {
                  'name': 'メッセージ：2016',
                  'language': 'JP',
                  'type': null
                },
                {
                  'name': 'Gəliş',
                  'language': 'AZ',
                  'type': null
                },
                {
                  'name': '컨택트',
                  'language': 'KR',
                  'type': null
                }
              ],
              'externalId': {
                'imdb': 'tt2543164',
                'tmdb': 329865,
                'kpHD': '4b2ae346e6f450288d69daeb2cec6e05'
              },
              'logo': {
                'url': 'https://avatars.mds.yandex.net/get-ott/1652588/2a0000016fae4083a7ce2e57324fe109606f/orig'
              },
              'poster': {
                'url': 'https://image.openmoviedb.com/kinopoisk-images/1900788/bb6366bb-5120-401c-80da-7be1ba6b25a1/orig',
                'previewUrl': 'https://image.openmoviedb.com/kinopoisk-images/1900788/bb6366bb-5120-401c-80da-7be1ba6b25a1/x1000'
              },
              'backdrop': {
                'url': 'https://image.openmoviedb.com/tmdb-images/original/iTyh3hqTUjiRqQo8Uz1w1KtQti9.jpg',
                'previewUrl': 'https://image.openmoviedb.com/tmdb-images/w500/iTyh3hqTUjiRqQo8Uz1w1KtQti9.jpg'
              },
              'rating': {
                'kp': 7.627,
                'imdb': 7.9,
                'filmCritics': 8.4,
                'russianFilmCritics': 95,
                'await': null
              },
              'votes': {
                'kp': 388578,
                'imdb': 760292,
                'filmCritics': 443,
                'russianFilmCritics': 20,
                'await': 12888
              },
              'genres': [
                {
                  'name': 'фантастика'
                },
                {
                  'name': 'драма'
                },
                {
                  'name': 'детектив'
                }
              ],
              'countries': [
                {
                  'name': 'США'
                },
                {
                  'name': 'Канада'
                }
              ],
              'releaseYears': []
            },
            {
              'id': 13701,
              'name': 'Прибытие',
              'alternativeName': 'The Arrival',
              'enName': '',
              'type': 'movie',
              'year': 1996,
              'description': 'Однажды радиоастроном Зэйн Замински услышал сигнал из космоса. Однако за совершенное Зэйном «открытие века» его начальник Джордиан увольняет своего сотрудника, из чего Замински делает вывод, что существует грандиозный заговор с целью скрыть установление контакта с внеземной цивилизацией. \r\n\r\nВ поисках доказательств своего предположения Зэйн приезжает в мексиканскую провинцию, где знакомится с Иланой Грин, специалисткой в области прогнозов погоды для всей планеты. Здесь, в Мексике, с риском для жизни Зэйн узнает, что инопланетяне у нас на Земле чувствуют себя хозяевами. \r\n\r\nКонечно, они пока еще не завоевали Землю, но, выбирая, каким путем им идти, чтобы решить проблемы жизни на своей, очевидно, гибнущей планете (путем переговоров с землянами или путем уничтожения нашей цивилизации), пришельцы предпочли второй вариант...',
              'shortDescription': '',
              'movieLength': 115,
              'isSeries': false,
              'ticketsOnSale': false,
              'totalSeriesLength': null,
              'seriesLength': null,
              'ratingMpaa': 'pg13',
              'ageRating': 16,
              'top10': null,
              'top250': null,
              'typeNumber': 1,
              'status': null,
              'names': [
                {
                  'name': 'Прибытие'
                },
                {
                  'name': 'The Arrival'
                },
                {
                  'name': 'Primer contacto',
                  'language': 'MX',
                  'type': 'DVD title'
                },
                {
                  'name': 'Shockwave',
                  'language': 'US',
                  'type': 'working title'
                },
                {
                  'name': 'L\'Arrivée',
                  'language': 'FR',
                  'type': 'Titre alternatif'
                },
                {
                  'name': 'สงครามแอบยึดโลก',
                  'language': 'TH',
                  'type': null
                },
                {
                  'name': 'Die Ankunft',
                  'language': 'DE',
                  'type': null
                }
              ],
              'externalId': {
                'imdb': 'tt0115571',
                'tmdb': 10547
              },
              'logo': {
                'url': 'https://imagetmdb.com/t/p/original/p48Qin7s00do7SVIA4LFAHQsh2l.png'
              },
              'poster': {
                'url': 'https://image.openmoviedb.com/kinopoisk-images/1777765/de7ff619-bb89-45a3-bbb5-ec141d1a15a2/orig',
                'previewUrl': 'https://image.openmoviedb.com/kinopoisk-images/1777765/de7ff619-bb89-45a3-bbb5-ec141d1a15a2/x1000'
              },
              'backdrop': {
                'url': 'https://image.openmoviedb.com/tmdb-images/original/oJ597dVjLMICx56clM7iy3AUUsA.jpg',
                'previewUrl': 'https://image.openmoviedb.com/tmdb-images/w500/oJ597dVjLMICx56clM7iy3AUUsA.jpg'
              },
              'rating': {
                'kp': 6.834,
                'imdb': 6.2,
                'filmCritics': 6.2,
                'russianFilmCritics': 0,
                'await': null
              },
              'votes': {
                'kp': 9900,
                'imdb': 37881,
                'filmCritics': 35,
                'russianFilmCritics': 0,
                'await': 0
              },
              'genres': [
                {
                  'name': 'фантастика'
                },
                {
                  'name': 'триллер'
                },
                {
                  'name': 'детектив'
                }
              ],
              'countries': [
                {
                  'name': 'США'
                },
                {
                  'name': 'Мексика'
                }
              ],
              'releaseYears': []
            },
            {
              'id': 978276,
              'name': 'Прибытие',
              'alternativeName': 'The Arrival',
              'enName': '',
              'type': 'movie',
              'year': 2016,
              'description': 'Анна сидит в кафе в ожидании своего парня — она собирается рассказать о том, что ждёт от него ребенка. При этом молодая героиня находится в состоянии внутренней борьбы: должна ли она оставить ребенка, или же ей следует сделать аборт?',
              'shortDescription': '',
              'movieLength': 5,
              'isSeries': false,
              'ticketsOnSale': false,
              'totalSeriesLength': null,
              'seriesLength': null,
              'ratingMpaa': null,
              'ageRating': null,
              'top10': null,
              'top250': null,
              'typeNumber': 1,
              'status': null,
              'names': [
                {
                  'name': 'Прибытие'
                },
                {
                  'name': 'The Arrival'
                }
              ],
              'externalId': {
                'imdb': 'tt12127904',
                'kpHD': null
              },
              'logo': {
                'url': null
              },
              'poster': {
                'url': null,
                'previewUrl': null
              },
              'backdrop': {
                'url': null,
                'previewUrl': null
              },
              'rating': {
                'kp': 0,
                'imdb': 6.7,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': 0
              },
              'votes': {
                'kp': 110,
                'imdb': 89,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': 2
              },
              'genres': [
                {
                  'name': 'короткометражка'
                },
                {
                  'name': 'драма'
                }
              ],
              'countries': [
                {
                  'name': 'Великобритания'
                }
              ],
              'releaseYears': []
            },
            {
              'id': 33485,
              'name': 'Прибытие',
              'alternativeName': 'The Arrival',
              'enName': '',
              'type': 'movie',
              'year': 1991,
              'description': 'Из фильмов мы знаем, что когда «нечто» прилетает из космоса, то можно ожидать чего угодно. Так и здесь. После контакта с этим «нечто» пожилой человек умирает, а потом воскресает в морге, после чего с ним начинают происходить ужасные вещи. Он видит страшные сны или галлюцинации, а в окрестностях находят обескровленные трупы. У растений и животных наблюдается мутация. Но самое удивительное, что он молодеет, убивая и убивает, молодея. В него вселилось существо с другой планеты, и за ним охотится ФБР, но возможно ли убить это «нечто»?',
              'shortDescription': '',
              'movieLength': 103,
              'isSeries': false,
              'ticketsOnSale': false,
              'totalSeriesLength': null,
              'seriesLength': null,
              'ratingMpaa': 'r',
              'ageRating': null,
              'top10': null,
              'top250': null,
              'typeNumber': 1,
              'status': null,
              'names': [
                {
                  'name': 'Прибытие'
                },
                {
                  'name': 'The Arrival'
                },
                {
                  'name': 'The unwelcomed',
                  'language': 'US',
                  'type': null
                }
              ],
              'externalId': {
                'tmdb': 132369,
                'kpHD': null
              },
              'logo': {
                'url': null
              },
              'poster': {
                'url': 'https://image.openmoviedb.com/kinopoisk-images/1773646/86fe7a2a-f60d-4acb-8afe-e1acbfa25ba4/orig',
                'previewUrl': 'https://image.openmoviedb.com/kinopoisk-images/1773646/86fe7a2a-f60d-4acb-8afe-e1acbfa25ba4/x1000'
              },
              'backdrop': {
                'url': 'https://image.openmoviedb.com/tmdb-images/original/8CbUithVRbpbdSJyshjyFZNVsi6.jpg',
                'previewUrl': 'https://image.openmoviedb.com/tmdb-images/w500/8CbUithVRbpbdSJyshjyFZNVsi6.jpg'
              },
              'rating': {
                'kp': 0,
                'imdb': 4.5,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': 0
              },
              'votes': {
                'kp': 95,
                'imdb': 384,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': 0
              },
              'genres': [
                {
                  'name': 'ужасы'
                },
                {
                  'name': 'фантастика'
                }
              ],
              'countries': [
                {
                  'name': 'США'
                }
              ],
              'releaseYears': []
            },
            {
              'id': 570036,
              'name': 'Прибытие',
              'alternativeName': 'Up \'n\' Coming',
              'enName': '',
              'type': 'movie',
              'year': 1982,
              'description': '',
              'shortDescription': '',
              'movieLength': 86,
              'isSeries': false,
              'ticketsOnSale': false,
              'totalSeriesLength': null,
              'seriesLength': null,
              'ratingMpaa': null,
              'ageRating': 18,
              'top10': null,
              'top250': null,
              'typeNumber': 1,
              'status': null,
              'names': [
                {
                  'name': 'Прибытие'
                },
                {
                  'name': 'Up \'n\' Coming'
                }
              ],
              'externalId': {
                'imdb': null,
                'kpHD': null
              },
              'logo': {
                'url': null
              },
              'poster': {
                'url': 'https://image.openmoviedb.com/kinopoisk-images/1599028/af57cf71-a3ee-443a-aa00-a7a6ff88ea53/orig',
                'previewUrl': 'https://image.openmoviedb.com/kinopoisk-images/1599028/af57cf71-a3ee-443a-aa00-a7a6ff88ea53/x1000'
              },
              'backdrop': {
                'url': null,
                'previewUrl': null
              },
              'rating': {
                'kp': 0,
                'imdb': 6.2,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': 0
              },
              'votes': {
                'kp': 65,
                'imdb': 342,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': 0
              },
              'genres': [
                {
                  'name': 'для взрослых'
                },
                {
                  'name': 'драма'
                },
                {
                  'name': 'музыка'
                }
              ],
              'countries': [
                {
                  'name': 'США'
                }
              ],
              'releaseYears': []
            },
            {
              'id': 466669,
              'name': 'Прибытие',
              'alternativeName': 'A megérkezés',
              'enName': '',
              'type': 'movie',
              'year': 1963,
              'description': '',
              'shortDescription': '',
              'movieLength': 0,
              'isSeries': false,
              'ticketsOnSale': false,
              'totalSeriesLength': null,
              'seriesLength': null,
              'ratingMpaa': null,
              'ageRating': null,
              'top10': null,
              'top250': null,
              'typeNumber': 1,
              'status': null,
              'names': [
                {
                  'name': 'Прибытие'
                },
                {
                  'name': 'A megérkezés'
                }
              ],
              'externalId': {
                'kpHD': null
              },
              'logo': {
                'url': null
              },
              'poster': {
                'url': null,
                'previewUrl': null
              },
              'backdrop': {
                'url': null,
                'previewUrl': null
              },
              'rating': {
                'kp': 0,
                'imdb': 0,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': 0
              },
              'votes': {
                'kp': 2,
                'imdb': 0,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': 0
              },
              'genres': [],
              'countries': [
                {
                  'name': 'Венгрия'
                }
              ],
              'releaseYears': []
            },
            {
              'id': 89544,
              'name': 'Прибытие поезда на вокзал города Ла-Сьота',
              'alternativeName': 'L\' Arrivée d\'un train à la Ciotat',
              'enName': '',
              'type': 'movie',
              'year': 1895,
              'description': 'Всемирно известная короткометражка про прибытие поезда на вокзал.',
              'shortDescription': '',
              'movieLength': 1,
              'isSeries': false,
              'ticketsOnSale': false,
              'totalSeriesLength': null,
              'seriesLength': null,
              'ratingMpaa': null,
              'ageRating': null,
              'top10': null,
              'top250': null,
              'typeNumber': 1,
              'status': null,
              'names': [
                {
                  'name': 'Прибытие поезда на вокзал города Ла-Сьота'
                },
                {
                  'name': 'L\' Arrivée d\'un train à la Ciotat'
                }
              ],
              'externalId': {
                'kpHD': null
              },
              'logo': {
                'url': null
              },
              'poster': {
                'url': 'https://image.openmoviedb.com/kinopoisk-images/1704946/a16be736-aab3-49d6-983a-add8fc3f0c2b/orig',
                'previewUrl': 'https://image.openmoviedb.com/kinopoisk-images/1704946/a16be736-aab3-49d6-983a-add8fc3f0c2b/x1000'
              },
              'backdrop': {
                'url': null,
                'previewUrl': null
              },
              'rating': {
                'kp': 8.072,
                'imdb': 7.4,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': null
              },
              'votes': {
                'kp': 16289,
                'imdb': 12747,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': 0
              },
              'genres': [
                {
                  'name': 'документальный'
                },
                {
                  'name': 'короткометражка'
                }
              ],
              'countries': [
                {
                  'name': 'Франция'
                }
              ],
              'releaseYears': []
            },
            {
              'id': 39929,
              'name': 'Прибытие поезда',
              'alternativeName': '',
              'enName': '',
              'type': 'movie',
              'year': 1995,
              'description': 'Фильм состоит из 4 новелл:\n\n«Свадебный марш» - Неклассический любовный треугольник: отец-кинорежиссер, сын-студент, любовница отца - она же невеста сына.\n\n«Экзерсис №5» - Снимается кино. Группа ждет погоды. Кто-то пьет кофе, кто-то пытается репетировать, кто-то решает личные проблемы или предается адюльтеру. И за всем этим бесстрастно наблюдает камера, которую забыли выключить.\n\n«Трофимъ» - Обыкновенная российская история. Мужик приревновал жену к брату, зашиб его топором и ударился в бега, в стольный город С.-Петербург. Тут его и взяли - тепленького - в борделе.\n\n«Дорога» - Двое беженцев бродят по вокзалам столицы: она поет русские песни, он — организатор и аккомпаниатор. Кроме случайных слушателей им внимает некто из «новых русских».',
              'shortDescription': '',
              'movieLength': 98,
              'isSeries': false,
              'ticketsOnSale': false,
              'totalSeriesLength': null,
              'seriesLength': null,
              'ratingMpaa': null,
              'ageRating': null,
              'top10': null,
              'top250': null,
              'typeNumber': 1,
              'status': null,
              'names': [
                {
                  'name': 'Прибытие поезда'
                },
                {
                  'name': 'Дорога',
                  'language': 'RU',
                  'type': null
                },
                {
                  'name': 'Свадебный марш',
                  'language': 'RU',
                  'type': null
                },
                {
                  'name': 'Трофимъ',
                  'language': 'RU',
                  'type': null
                },
                {
                  'name': 'Экзерсис N5',
                  'language': 'RU',
                  'type': null
                },
                {
                  'name': 'Pribytie poezda',
                  'language': 'RU',
                  'type': null
                }
              ],
              'externalId': {
                'imdb': 'tt0114178',
                'tmdb': 569043
              },
              'logo': {
                'url': null
              },
              'poster': {
                'url': 'https://image.openmoviedb.com/kinopoisk-images/1704946/ee93d4b8-42f0-4819-bc30-6ae9e7cc0df8/orig',
                'previewUrl': 'https://image.openmoviedb.com/kinopoisk-images/1704946/ee93d4b8-42f0-4819-bc30-6ae9e7cc0df8/x1000'
              },
              'backdrop': {
                'url': null,
                'previewUrl': null
              },
              'rating': {
                'kp': 7.065,
                'imdb': 6.9,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': null
              },
              'votes': {
                'kp': 2786,
                'imdb': 218,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': 0
              },
              'genres': [
                {
                  'name': 'драма'
                }
              ],
              'countries': [
                {
                  'name': 'Россия'
                }
              ],
              'releaseYears': []
            },
            {
              'id': 266499,
              'name': 'Прибытие делегатов на фотоконгресс в Лионе',
              'alternativeName': 'Neuville-sur-Saône: Débarquement du congrès des photographes à Lyon',
              'enName': '',
              'type': 'movie',
              'year': 1895,
              'description': 'Делегаты конгресса и дамы спускаются по трапу с парохода на пристань.',
              'shortDescription': '',
              'movieLength': 1,
              'isSeries': false,
              'ticketsOnSale': false,
              'totalSeriesLength': null,
              'seriesLength': null,
              'ratingMpaa': null,
              'ageRating': null,
              'top10': null,
              'top250': null,
              'typeNumber': 1,
              'status': null,
              'names': [
                {
                  'name': 'Прибытие делегатов на фотоконгресс в Лионе'
                },
                {
                  'name': 'Neuville-sur-Saône: Débarquement du congrès des photographes à Lyon'
                },
                {
                  'name': 'Congrès des sociétés photographiques de France',
                  'language': 'FR',
                  'type': null
                },
                {
                  'name': 'Promenade des congressistes sur le bord de la Saône',
                  'language': 'FR',
                  'type': null
                },
                {
                  'name': 'Arrivée des congressistes à Neuville-sur-Saône',
                  'language': 'FR',
                  'type': null
                },
                {
                  'name': 'Le débarquement du congrès de photographie à Lyon',
                  'language': 'FR',
                  'type': null
                },
                {
                  'name': 'Débarquement',
                  'language': 'FR',
                  'type': null
                }
              ],
              'externalId': {
                'imdb': 'tt0000013',
                'tmdb': 208234
              },
              'logo': {
                'url': null
              },
              'poster': {
                'url': 'https://image.openmoviedb.com/kinopoisk-images/1704946/64d2b6ab-ec62-4fd9-80b3-a99411941036/orig',
                'previewUrl': 'https://image.openmoviedb.com/kinopoisk-images/1704946/64d2b6ab-ec62-4fd9-80b3-a99411941036/x1000'
              },
              'backdrop': {
                'url': 'https://image.openmoviedb.com/tmdb-images/original/dUKM98Zq8Xc0GJM3DplCvWeCId.jpg',
                'previewUrl': 'https://image.openmoviedb.com/tmdb-images/w500/dUKM98Zq8Xc0GJM3DplCvWeCId.jpg'
              },
              'rating': {
                'kp': 6.155,
                'imdb': 5.7,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': null
              },
              'votes': {
                'kp': 1591,
                'imdb': 1939,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': 0
              },
              'genres': [
                {
                  'name': 'документальный'
                },
                {
                  'name': 'короткометражка'
                }
              ],
              'countries': [
                {
                  'name': 'Франция'
                }
              ],
              'releaseYears': []
            },
            {
              'id': 22456,
              'name': 'Прибытие: Новая угроза',
              'alternativeName': 'The Second Arrival',
              'enName': '',
              'type': 'movie',
              'year': 1998,
              'description': 'Несколько лет назад ученый Зэйн Земински нащупал нити глобального заговора инопланетян, оккупировавших Землю, и погиб при загадочных обстоятельствах. Он, однако, успел передать своему брату Джеку Эддисону и талантливой журналистке Бриджет Риордан свидетельства того, что пришельцы изменяют климат планеты, делая его непригодным для жизни людей. Попытавшись обнародовать эти факты, Джек и Бриджет понимают, что инопланетяне в человеческом облике фактически захватили власть на Земле, уничтожая всех, кто хочет сообщит людям правду. Теперь, чтобы сорвать их губительные планы, они вынуждены действовать в одиночку, спасаясь от преследования тех, кому они когда-то доверяли.',
              'shortDescription': '',
              'movieLength': 105,
              'isSeries': false,
              'ticketsOnSale': false,
              'totalSeriesLength': null,
              'seriesLength': null,
              'ratingMpaa': 'r',
              'ageRating': 16,
              'top10': null,
              'top250': null,
              'typeNumber': 1,
              'status': null,
              'names': [
                {
                  'name': 'Прибытие: Новая угроза'
                },
                {
                  'name': 'The Second Arrival'
                },
                {
                  'name': 'Arrival II',
                  'language': 'US',
                  'type': null
                },
                {
                  'name': 'Arrival 2',
                  'language': 'US',
                  'type': 'working title'
                },
                {
                  'name': 'L\'invasion finale',
                  'language': 'FR',
                  'type': 'TV title'
                },
                {
                  'name': 'The Arrival 2: The Second Arrival',
                  'language': 'FR',
                  'type': 'VHS title'
                },
                {
                  'name': 'Η Δεύτερη Άφιξη',
                  'language': 'GR',
                  'type': 'VHS title'
                },
                {
                  'name': 'Galaktikus támadás 2',
                  'language': 'HU',
                  'type': null
                }
              ],
              'externalId': {
                'imdb': 'tt0122961',
                'tmdb': 19154
              },
              'logo': {
                'url': null
              },
              'poster': {
                'url': 'https://image.openmoviedb.com/kinopoisk-images/1629390/38f15a23-8e79-479a-8159-2069fdb578fe/orig',
                'previewUrl': 'https://image.openmoviedb.com/kinopoisk-images/1629390/38f15a23-8e79-479a-8159-2069fdb578fe/x1000'
              },
              'backdrop': {
                'url': 'https://image.openmoviedb.com/tmdb-images/original/xGS06Ur3Etqzjf5D0xqKU6WqfeG.jpg',
                'previewUrl': 'https://image.openmoviedb.com/tmdb-images/w500/xGS06Ur3Etqzjf5D0xqKU6WqfeG.jpg'
              },
              'rating': {
                'kp': 4.785,
                'imdb': 3.8,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': null
              },
              'votes': {
                'kp': 581,
                'imdb': 3170,
                'filmCritics': 0,
                'russianFilmCritics': 0,
                'await': 0
              },
              'genres': [
                {
                  'name': 'ужасы'
                },
                {
                  'name': 'фантастика'
                },
                {
                  'name': 'триллер'
                },
                {
                  'name': 'детектив'
                }
              ],
              'countries': [
                {
                  'name': 'Канада'
                },
                {
                  'name': 'США'
                }
              ],
              'releaseYears': []
            }
          ],
          'total': 155,
          'limit': 10,
          'page': 1,
          'pages': 16
        };

  const handleInputChange = async (e) => {
    // const result = await getSearchResult({
    //   page: 1,
    //   limit: 10,
    //   query: e.target.value
    // });

    setSearchResult(mockResult.docs);
  };

  const optimizesHandleInputChange = debounce((e) => handleInputChange(e), 500);
  return (
    <div className={styles.search}>
      <input className={styles.search__input} type={'search'} placeholder={'Найти'}
        onInput={(e) => optimizesHandleInputChange(e)}/>

      <button type={'button'} className={styles.search__submit}>
        <SearchIcon/>
      </button>

      <ul className={styles.search__result}>
        {searchResult.map((result) => (
          <SearchItem
            key={result.id}
            title={result.name}
            imgSrc={result.poster.previewUrl}
            year={result.year}
            rating={result.rating.kp}
          />
        ))}
      </ul>
    </div>
  );
};