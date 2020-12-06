import { random, lorem, date } from 'faker';
import { PodcastData } from '../../common/podcast';

const generatePodcast = (id: number) => ({
  id,
  number: id,
  title: lorem.sentence(8),
  description: lorem.paragraph(3),
  duration: random.number(7200),
  published: date.past().toISOString(),
});

export const autoDocs: PodcastData[] = Array(50)
  .fill(0)
  .map((_, i) => generatePodcast(i));

const docs = [
  {
    id: 0,
    number: 0,
    title: 'Nostrum iste facilis nam necessitatibus rerum rerum est.',
    description:
      'Qui qui commodi voluptas a sint dolorem expedita nam. Dolores optio qui. Accusantium beatae amet et atque itaque officia nihil ut. Atque deleniti nihil in veritatis sit rerum eum.',
    duration: 2135,
    published: '2020-05-22T17:30:13.852Z',
  },
  {
    id: 1,
    number: 1,
    title:
      'Sint cupiditate asperiores dolore numquam labore voluptatem laborum.',
    description:
      'Quia hic non corporis ea quibusdam maiores. Ullam ex quos nobis dolores debitis pariatur doloribus repudiandae. Est excepturi et mollitia ratione praesentium in minima libero. Est rerum assumenda laboriosam quae qui accusantium.',
    duration: 6181,
    published: '2020-07-02T00:38:22.579Z',
  },
  {
    id: 2,
    number: 2,
    title: 'Cupiditate et ea et eum sed id quam.',
    description:
      'Ut ut vitae consequatur voluptas cupiditate natus. Aut quasi repudiandae sunt ullam voluptas natus. Fuga omnis et corporis autem deleniti nihil. Quae autem et quia repellendus quia ut quis nostrum. Inventore culpa ex non molestiae nobis consequuntur iste quam quia. Doloremque et porro rerum odit praesentium autem enim qui itaque.',
    duration: 4367,
    published: '2020-09-07T20:23:07.486Z',
  },
  {
    id: 3,
    number: 3,
    title: 'Sit suscipit dolor impedit rem commodi architecto ut.',
    description:
      'Eveniet quia rerum et. Non deleniti culpa. Quo incidunt dolores ratione consectetur reprehenderit. Eveniet amet voluptas laudantium excepturi maxime voluptate dolorem magnam voluptatem.',
    duration: 5341,
    published: '2020-07-01T21:30:17.209Z',
  },
  {
    id: 4,
    number: 4,
    title: 'Laborum quaerat nemo asperiores quo dolor culpa rerum.',
    description:
      'Dolor sequi porro culpa. Culpa in incidunt velit nesciunt eligendi alias aspernatur eveniet. Eos rerum magni excepturi commodi quasi necessitatibus voluptates iusto.',
    duration: 4811,
    published: '2020-06-11T02:19:39.361Z',
  },
  {
    id: 5,
    number: 5,
    title: 'Voluptatibus ut est similique et id commodi cumque.',
    description:
      'Expedita harum ipsam qui ipsum placeat ducimus esse dignissimos. Sunt voluptas eius laborum voluptatibus. Animi aliquid eius perspiciatis eos ea inventore quia sit. Dolores iusto ducimus quas quasi natus voluptatum placeat. Et tempore voluptatem magni aperiam.',
    duration: 1441,
    published: '2020-08-27T02:52:53.129Z',
  },
  {
    id: 6,
    number: 6,
    title: 'Earum nihil placeat odit ut explicabo dolorem cumque.',
    description:
      'Deserunt ut autem esse commodi inventore dolore. Et optio et voluptatum consequatur deserunt placeat illo. Ipsum aut error aspernatur voluptas blanditiis tempora consequatur cupiditate doloribus.',
    duration: 3490,
    published: '2020-05-11T02:34:21.016Z',
  },
  {
    id: 7,
    number: 7,
    title: 'Illum aut fugit vero beatae earum magnam voluptas.',
    description:
      'Enim ipsam et eveniet qui maxime est voluptatem. Iusto cumque nam reiciendis accusantium. Sunt natus dolorem iste repellat fugiat. Necessitatibus qui dolores et enim adipisci tempore perferendis.',
    duration: 5050,
    published: '2019-11-18T05:52:05.372Z',
  },
  {
    id: 8,
    number: 8,
    title: 'Corporis modi odio nulla vel velit fugiat et.',
    description:
      'Maiores voluptas ratione culpa similique repellendus. Qui voluptatem fuga dolorem. Voluptatem quibusdam quae.',
    duration: 2565,
    published: '2020-05-08T17:43:10.112Z',
  },
  {
    id: 9,
    number: 9,
    title: 'Incidunt libero eius ut voluptatum a harum perferendis.',
    description:
      'Repudiandae ea eveniet quibusdam repellendus soluta sit qui qui. Dolor quia occaecati consequuntur. Hic eveniet aliquam quos sint at nobis saepe architecto nihil. Ut ut porro aspernatur iusto distinctio rerum.',
    duration: 6606,
    published: '2019-11-22T14:55:49.826Z',
  },
  {
    id: 10,
    number: 10,
    title: 'Animi quo tenetur quasi vero dolorem molestiae deserunt.',
    description:
      'Amet officia laudantium beatae eos rerum consectetur est quis est. Voluptas ea excepturi quia culpa laboriosam reprehenderit quo nisi. Natus veritatis sequi aut. Sint et recusandae sequi ut ut qui dolor vel et.',
    duration: 4107,
    published: '2020-07-16T00:44:14.339Z',
  },
  {
    id: 11,
    number: 11,
    title: 'Facilis sed cumque necessitatibus eaque rerum voluptas corrupti.',
    description:
      'Natus ipsum facere est et voluptatem placeat exercitationem nesciunt. Qui sunt a eius illo facere. Saepe deleniti saepe dolorem maxime vel.',
    duration: 5104,
    published: '2020-09-27T17:54:28.162Z',
  },
  {
    id: 12,
    number: 12,
    title: 'Voluptatem voluptates sed qui tenetur at architecto dolorum.',
    description:
      'Ea voluptatibus officia ex minima non nisi consequatur non corrupti. Ut est distinctio. Asperiores eius sunt molestias in optio hic ipsum. Aspernatur atque harum voluptate officiis.',
    duration: 3564,
    published: '2020-10-04T07:47:49.957Z',
  },
  {
    id: 13,
    number: 13,
    title: 'Ea id et quas facere maxime unde ea.',
    description:
      'Aliquam est accusantium ut suscipit est inventore voluptatem unde optio. Omnis atque consectetur quo voluptatum dolor eum ea ratione a. Eligendi velit et sapiente suscipit consequatur et. Eius odit repellat laborum dolorem non odit vel. Exercitationem eius reprehenderit.',
    duration: 6791,
    published: '2020-06-08T20:31:03.463Z',
  },
  {
    id: 14,
    number: 14,
    title: 'Harum ea rerum labore non consequuntur ut est.',
    description:
      'Commodi distinctio consectetur aspernatur quaerat suscipit non debitis nulla aut. Quod et illo libero rerum et. Quaerat et eum qui qui aperiam temporibus quaerat. Consectetur enim aut aliquid voluptates et dolor alias. Earum molestias est commodi beatae. Provident magnam odit.',
    duration: 3490,
    published: '2020-08-12T07:09:15.721Z',
  },
  {
    id: 15,
    number: 15,
    title:
      'Qui aliquam doloribus qui excepturi laboriosam reprehenderit magni.',
    description:
      'Rerum corporis earum magnam qui libero optio temporibus temporibus. Asperiores et recusandae in. Id est autem sunt ea quia qui quam iure.',
    duration: 1560,
    published: '2020-01-10T22:02:30.491Z',
  },
  {
    id: 16,
    number: 16,
    title: 'Maxime nihil recusandae quos sed ea ut consectetur.',
    description:
      'Tenetur modi accusantium odio ut unde qui modi magni est. Repellat aut expedita omnis magni repudiandae exercitationem perferendis voluptas officia. In officiis ea quis eum.',
    duration: 849,
    published: '2020-08-26T19:03:28.581Z',
  },
  {
    id: 17,
    number: 17,
    title: 'Qui aperiam vel sint nulla ut ab nesciunt.',
    description:
      'Voluptatem modi fuga non officiis in est quo amet repellendus. Unde illum quidem qui sed pariatur temporibus quo dolor. Unde architecto velit ut cupiditate saepe earum quam. Totam at ullam corporis velit et fuga quas. Suscipit commodi laboriosam omnis ullam qui nobis ea sunt unde. Est debitis ullam sapiente expedita et.',
    duration: 504,
    published: '2019-12-10T13:35:38.579Z',
  },
  {
    id: 18,
    number: 18,
    title: 'Voluptas cum veniam accusamus eos consequatur iste atque.',
    description:
      'Aspernatur reprehenderit vel. Non laboriosam et velit architecto ab eos ipsam quis et. Veniam et sed veniam doloremque.',
    duration: 6328,
    published: '2020-06-06T16:41:01.305Z',
  },
  {
    id: 19,
    number: 19,
    title: 'Temporibus placeat est repellendus et ipsa delectus dolore.',
    description:
      'Velit dolor doloribus est illum nihil voluptatum quam. Cum ratione rerum eos accusantium molestias exercitationem eaque et. Aut reiciendis et quos odio iste. Eaque unde quo cupiditate vero a deserunt.',
    duration: 297,
    published: '2020-03-12T12:39:03.542Z',
  },
  {
    id: 20,
    number: 20,
    title: 'Eaque eveniet alias velit repudiandae ea vel similique.',
    description:
      'Asperiores harum vel non dolorem iste veniam vel facere. Amet ut molestiae nihil sed vitae. Et sed et minima aut facilis voluptatum labore. Repellat voluptatem quibusdam quos et commodi hic. Laboriosam nostrum ut aspernatur. Odit vel consequatur quaerat.',
    duration: 1,
    published: '2020-04-30T21:52:50.094Z',
  },
  {
    id: 21,
    number: 21,
    title: 'Autem eos beatae quia iusto assumenda fugit ullam.',
    description:
      'Ab suscipit unde. Modi voluptate sit voluptate. Praesentium non praesentium aliquid dolor. Nulla qui iste. Est voluptatum et.',
    duration: 6886,
    published: '2020-02-11T16:54:24.176Z',
  },
  {
    id: 22,
    number: 22,
    title: 'Suscipit odit rerum corrupti ducimus beatae eum eaque.',
    description:
      'Doloremque magni natus et et mollitia est molestiae rem vitae. Aut velit veritatis ea accusantium. Itaque debitis neque laborum voluptas.',
    duration: 714,
    published: '2019-12-11T11:50:20.184Z',
  },
  {
    id: 23,
    number: 23,
    title: 'Tempore dignissimos qui voluptate officia cumque non est.',
    description:
      'Aut consequuntur in rerum. Non aliquam nihil repellendus perferendis quibusdam eligendi eos vitae. Sapiente repellat et reiciendis libero similique et eos accusantium. Tempora magnam consequuntur. Et aliquid cumque corrupti exercitationem quis esse officia.',
    duration: 2879,
    published: '2020-08-16T06:48:20.885Z',
  },
  {
    id: 24,
    number: 24,
    title: 'Iste sint id minima ut nesciunt itaque labore.',
    description:
      'Dolores rerum quia rerum aut ea laborum et incidunt molestias. Nulla incidunt dolor ipsa enim sit accusamus. Qui corporis dignissimos voluptas excepturi.',
    duration: 3272,
    published: '2020-07-11T02:56:10.746Z',
  },
  {
    id: 25,
    number: 25,
    title: 'Porro voluptatem dicta vero culpa ipsum minima et.',
    description:
      'Laudantium ut culpa eos qui libero magnam. Rerum pariatur possimus voluptatem delectus natus. Cupiditate sed quis aut culpa in doloremque et sit. Natus nobis dolore. Ut voluptatem possimus ad sapiente aliquid quo qui beatae. Maxime corrupti dolores nulla ex.',
    duration: 2398,
    published: '2020-06-16T16:11:23.802Z',
  },
  {
    id: 26,
    number: 26,
    title: 'In ipsa voluptatem molestiae quia alias sed dolores.',
    description:
      'Omnis quam quia. Cumque delectus non minima pariatur est eum eum qui. Illo qui molestias.',
    duration: 5226,
    published: '2019-11-29T04:35:15.475Z',
  },
  {
    id: 27,
    number: 27,
    title: 'Velit commodi corrupti cumque labore vel ea cum.',
    description:
      'Et quidem qui suscipit enim rerum aspernatur. Quis nihil et. Et rem corrupti nisi.',
    duration: 1467,
    published: '2020-07-21T06:54:49.325Z',
  },
  {
    id: 28,
    number: 28,
    title: 'Sint ratione quasi officia voluptatem hic saepe quas.',
    description:
      'Qui repellendus enim qui voluptas assumenda ratione itaque corporis. Iusto et voluptatem. Dolorem et et dolores sit eveniet quia laudantium.',
    duration: 5208,
    published: '2019-11-25T23:26:22.521Z',
  },
  {
    id: 29,
    number: 29,
    title: 'Labore consectetur sit nulla aut quisquam optio cupiditate.',
    description:
      'Ipsam officia est eaque sed. Et voluptatem nisi voluptas. Provident necessitatibus dolores autem rerum voluptatum. Ullam eos libero consequatur voluptatum dolor veritatis dolorum voluptate distinctio. Et exercitationem dolorum qui reprehenderit enim velit nam est animi.',
    duration: 1741,
    published: '2020-05-19T23:26:49.178Z',
  },
  {
    id: 30,
    number: 30,
    title: 'Sed adipisci pariatur accusantium veritatis architecto ut porro.',
    description:
      'Et voluptatem laboriosam explicabo repellat laudantium. Et quod rerum placeat veritatis cumque labore. Voluptatem ut blanditiis est est. Voluptatibus eaque voluptatem aut est. Doloremque officiis eaque quas rerum occaecati. Possimus dolorem natus voluptatibus ut eveniet ratione dolore qui.',
    duration: 5609,
    published: '2020-01-17T23:59:31.293Z',
  },
  {
    id: 31,
    number: 31,
    title: 'Quia voluptas dolorem sed quidem odit magnam totam.',
    description:
      'Ad sit tempora aut id est quidem corrupti. Adipisci et facere voluptas voluptatem. Omnis temporibus quasi suscipit quia tempora non quis unde. Explicabo error hic officiis minus. Beatae nulla et fugit et ullam earum. Excepturi cumque suscipit vel illo itaque et recusandae corrupti eius.',
    duration: 3088,
    published: '2020-02-29T22:27:00.110Z',
  },
  {
    id: 32,
    number: 32,
    title: 'Nobis cumque nobis dolores deleniti quibusdam magni nihil.',
    description:
      'Voluptate ea numquam laudantium consequatur. Id tenetur rerum aut. Ut inventore est amet tempora voluptas exercitationem.',
    duration: 3444,
    published: '2020-06-30T23:58:14.028Z',
  },
  {
    id: 33,
    number: 33,
    title:
      'Deserunt repellat nemo provident consequatur itaque eos architecto.',
    description:
      'Porro dolores accusamus ad ut. Sapiente consequatur tempora molestiae ad. Maiores explicabo qui soluta ipsam. Dignissimos aspernatur dolore officiis voluptatem iusto quia aperiam. Tempora architecto non.',
    duration: 5021,
    published: '2020-02-02T14:57:47.879Z',
  },
  {
    id: 34,
    number: 34,
    title: 'Nemo hic et sint possimus sit sit laudantium.',
    description:
      'Ut sit veritatis doloribus. Et pariatur ratione quis possimus debitis. Soluta nisi et nostrum et soluta placeat.',
    duration: 6186,
    published: '2020-09-03T07:28:01.163Z',
  },
  {
    id: 35,
    number: 35,
    title: 'Est laudantium autem recusandae est eaque eius et.',
    description:
      'Fugiat totam cumque iste. Saepe laudantium alias enim sit distinctio sed culpa. Ut dolores sed sit vel tempora iste ut ut et. At vel sunt voluptas laborum dolorum sed. Voluptatem ut distinctio optio quae.',
    duration: 1143,
    published: '2020-04-03T20:16:24.202Z',
  },
  {
    id: 36,
    number: 36,
    title: 'Optio debitis ratione nesciunt ea labore ut recusandae.',
    description:
      'Blanditiis at harum asperiores aliquam error animi consequatur quod deserunt. In molestiae laudantium molestias sed molestiae labore. Neque ipsam ea voluptas cupiditate cum qui sequi ratione.',
    duration: 2715,
    published: '2020-05-29T17:02:18.729Z',
  },
  {
    id: 37,
    number: 37,
    title: 'Quia qui officia itaque omnis est quia omnis.',
    description:
      'Magnam eligendi et recusandae. Enim quibusdam iure fugit nobis. Facere ut quidem aperiam at asperiores aut ut quia vitae. Ratione saepe quas pariatur fuga ut. Inventore hic quo aperiam et.',
    duration: 362,
    published: '2020-09-23T01:08:00.549Z',
  },
  {
    id: 38,
    number: 38,
    title:
      'Architecto laboriosam enim incidunt voluptatem ea voluptatibus qui.',
    description:
      'Rerum natus architecto exercitationem. Quibusdam ut aut. Molestiae minus eos quasi dolorum. Quasi nam dicta aut a enim eligendi ipsum voluptates ut. Fugiat et praesentium et. Veritatis ut dolorem et earum.',
    duration: 6365,
    published: '2020-01-06T15:02:37.577Z',
  },
  {
    id: 39,
    number: 39,
    title: 'Quia in odio sed et quis non tempore.',
    description:
      'Quo molestiae delectus a. Architecto adipisci et. Dignissimos ea enim eveniet similique libero cupiditate velit sapiente. Enim pariatur officiis modi eum similique sapiente.',
    duration: 35,
    published: '2020-01-06T07:20:52.546Z',
  },
  {
    id: 40,
    number: 40,
    title: 'Voluptatibus et odio deserunt veniam et et quis.',
    description:
      'Vero omnis aliquam corrupti numquam. Sit velit esse voluptatem quod fuga perferendis. Itaque qui temporibus sequi. Et incidunt quia omnis nemo iusto id ut sit beatae. Eum est ea. Odit tempora id consequatur dolores reprehenderit molestias.',
    duration: 1106,
    published: '2020-05-28T08:48:40.048Z',
  },
  {
    id: 41,
    number: 41,
    title: 'Quisquam in beatae eius molestiae incidunt consequuntur nesciunt.',
    description:
      'Quod sequi sint dolores molestias animi consequatur blanditiis ab ad. Voluptatem fugiat animi aut consequatur nesciunt fuga quas. Nobis sint et id et voluptas. Praesentium cumque ducimus consequuntur velit quis hic doloremque. Porro rem eos est est natus et eius quam itaque. Rerum molestiae provident temporibus impedit a consequatur omnis dolores minima.',
    duration: 5695,
    published: '2020-07-19T03:35:49.494Z',
  },
  {
    id: 42,
    number: 42,
    title: 'Quos sunt minus culpa et cupiditate tenetur consectetur.',
    description:
      'Et in aut natus perferendis omnis iusto corrupti incidunt repellendus. Qui cum ad cumque consequatur dignissimos. Ex iste officiis adipisci numquam illo aut quia repudiandae ab. Quam sunt itaque quos atque rem dolores praesentium quod facilis. Occaecati amet aut quisquam ipsum aliquid enim. Ullam veritatis est occaecati.',
    duration: 2446,
    published: '2020-08-21T21:32:21.587Z',
  },
  {
    id: 43,
    number: 43,
    title: 'Velit nihil reiciendis laboriosam fugit neque quo amet.',
    description:
      'Officiis exercitationem dolores ea. Minima autem laboriosam libero. Enim velit odit quas dolores sunt assumenda aut saepe dolorem. Aperiam distinctio doloribus necessitatibus.',
    duration: 3382,
    published: '2020-09-12T01:54:40.833Z',
  },
  {
    id: 44,
    number: 44,
    title: 'A iusto ratione labore ipsam totam omnis commodi.',
    description:
      'Natus facilis nostrum ut. Qui non modi temporibus inventore accusantium unde maiores. Labore qui et. Placeat vel eum inventore fugit sed. Autem itaque asperiores et temporibus molestiae doloremque.',
    duration: 985,
    published: '2020-01-19T15:44:23.730Z',
  },
  {
    id: 45,
    number: 45,
    title: 'Nihil deleniti corrupti molestias cumque eveniet in molestiae.',
    description:
      'Cupiditate consectetur nisi reiciendis et commodi inventore. Ut vel libero sit nam. Commodi suscipit omnis autem laudantium veniam. Eum quam pariatur ex placeat perspiciatis et. Quo eum voluptas eius ad non quia laborum.',
    duration: 1052,
    published: '2020-02-11T06:04:25.833Z',
  },
  {
    id: 46,
    number: 46,
    title: 'Repellendus autem cumque fugiat blanditiis delectus ut non.',
    description:
      'Vero sequi adipisci ut. Et neque rerum non consequuntur esse atque rerum a ea. Ut fugiat aut minus asperiores porro ipsam dolore nihil nulla. Omnis quo culpa quod impedit temporibus facilis quo. Quas velit et animi et ratione officiis.',
    duration: 4787,
    published: '2020-10-21T00:24:08.279Z',
  },
  {
    id: 47,
    number: 47,
    title: 'Qui aut adipisci saepe provident ducimus rem nobis.',
    description:
      'Molestiae possimus eum fugit in molestiae. Et fugiat suscipit minima nihil adipisci at et nam. Totam eaque iusto in explicabo in eos ex et.',
    duration: 1144,
    published: '2020-06-29T19:18:05.971Z',
  },
  {
    id: 48,
    number: 48,
    title: 'Autem et incidunt velit quasi rerum corrupti distinctio.',
    description:
      'Magni iste pariatur rerum nihil praesentium esse. Delectus recusandae quis amet repellat sunt facilis voluptates explicabo. Cumque velit id veritatis fugit autem soluta. Aut quia dicta maiores.',
    duration: 3492,
    published: '2020-08-04T05:39:58.466Z',
  },
  {
    id: 49,
    number: 49,
    title: 'Maiores ea tempore voluptas illum minima quia et.',
    description:
      'Repellat provident sint architecto rem odio nobis repudiandae expedita repellendus. Ut quis quod eveniet alias a. Consequatur earum ut ea ullam tenetur. Alias suscipit numquam qui omnis aperiam officia et rerum. Architecto sint quia laboriosam nihil aliquid aperiam porro quis qui. Aut aut qui nam earum aut neque provident.',
    duration: 5898,
    published: '2020-05-13T00:32:31.734Z',
  },
] as PodcastData[];
export default docs;
