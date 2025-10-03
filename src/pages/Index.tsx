import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const fragranceNotes = [
    { id: "fresh", label: "Свежие", icon: "Sparkles" },
    { id: "sweet", label: "Сладкие", icon: "Candy" },
    { id: "woody", label: "Древесные", icon: "TreePine" },
    { id: "floral", label: "Цветочные", icon: "Flower2" },
    { id: "spicy", label: "Пряные", icon: "Flame" },
    { id: "citrus", label: "Цитрусовые", icon: "Citrus" },
  ];

  const perfumes = [
    {
      id: 1,
      name: "Noir Elegance",
      brand: "LUXE",
      price: 12990,
      image: "/img/fcc3d424-89b9-45b2-a1fd-71406295ef46.jpg",
      notes: ["woody", "spicy"],
      description: "Глубокий древесный аромат с нотами кедра и пачули",
    },
    {
      id: 2,
      name: "Rose Garden",
      brand: "BLOOM",
      price: 9990,
      image: "/img/4a9a88c8-492e-4586-bda9-ee7795a74afb.jpg",
      notes: ["floral", "sweet"],
      description: "Нежный цветочный букет с оттенками розы и жасмина",
    },
    {
      id: 3,
      name: "Citrus Fresh",
      brand: "AURA",
      price: 8490,
      image: "/img/5343f2e6-af6a-47eb-9cb3-c49cf4b43e87.jpg",
      notes: ["citrus", "fresh"],
      description: "Освежающий цитрусовый аромат с бергамотом",
    },
    {
      id: 4,
      name: "Vanilla Dream",
      brand: "SWEET",
      price: 11490,
      image: "/img/fcc3d424-89b9-45b2-a1fd-71406295ef46.jpg",
      notes: ["sweet", "floral"],
      description: "Сладкая ваниль с цветочными акцентами",
    },
    {
      id: 5,
      name: "Ocean Breeze",
      brand: "MARINE",
      price: 10990,
      image: "/img/4a9a88c8-492e-4586-bda9-ee7795a74afb.jpg",
      notes: ["fresh", "citrus"],
      description: "Свежий морской аромат с цитрусовыми нотами",
    },
    {
      id: 6,
      name: "Spice Mystique",
      brand: "ORIENT",
      price: 13990,
      image: "/img/5343f2e6-af6a-47eb-9cb3-c49cf4b43e87.jpg",
      notes: ["spicy", "woody"],
      description: "Восточные пряности с древесной базой",
    },
  ];

  const toggleNote = (noteId: string) => {
    setSelectedNotes(prev =>
      prev.includes(noteId)
        ? prev.filter(id => id !== noteId)
        : [...prev, noteId]
    );
  };

  const getRecommendations = () => {
    if (selectedNotes.length === 0) return perfumes;
    return perfumes.filter(perfume =>
      perfume.notes.some(note => selectedNotes.includes(note))
    );
  };

  const reviews = [
    { name: "Анна М.", rating: 5, text: "Потрясающий сервис! Нашла свой идеальный аромат благодаря рекомендациям." },
    { name: "Дмитрий К.", rating: 5, text: "Быстрая доставка, оригинальная продукция. Рекомендую!" },
    { name: "Елена В.", rating: 4, text: "Большой выбор парфюмерии. Консультанты помогли с выбором." },
  ];

  const blogPosts = [
    { title: "Как выбрать парфюм на лето", date: "15 мая 2024", image: "/img/5343f2e6-af6a-47eb-9cb3-c49cf4b43e87.jpg" },
    { title: "Топ-5 ароматов для вечера", date: "10 мая 2024", image: "/img/fcc3d424-89b9-45b2-a1fd-71406295ef46.jpg" },
    { title: "Уход за парфюмом: советы", date: "5 мая 2024", image: "/img/4a9a88c8-492e-4586-bda9-ee7795a74afb.jpg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PARFUM</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</a>
            <a href="#payment" className="text-sm font-medium hover:text-primary transition-colors">Оплата</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>

          <Button variant="outline" size="sm" className="relative">
            <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
            Корзина
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="mb-4">Новинка сезона</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Найдите свой идеальный аромат
              </h1>
              <p className="text-lg text-muted-foreground">
                Персональные рекомендации на основе ваших предпочтений. Оригинальная парфюмерия от мировых брендов.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Sparkles" className="h-4 w-4" />
                  Подобрать аромат
                </Button>
                <Button size="lg" variant="outline">Каталог</Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="/img/4a9a88c8-492e-4586-bda9-ee7795a74afb.jpg"
                alt="Luxury perfumes"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Icon name="ShieldCheck" className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-semibold">100% Оригинал</h3>
              <p className="text-sm text-muted-foreground">Гарантия подлинности</p>
            </div>
            <div className="space-y-2">
              <Icon name="Truck" className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-semibold">Доставка 1-2 дня</h3>
              <p className="text-sm text-muted-foreground">По всей России</p>
            </div>
            <div className="space-y-2">
              <Icon name="CreditCard" className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-semibold">Оплата онлайн</h3>
              <p className="text-sm text-muted-foreground">Безопасные платежи</p>
            </div>
            <div className="space-y-2">
              <Icon name="Gift" className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-semibold">Подарок к заказу</h3>
              <p className="text-sm text-muted-foreground">При покупке от 5000₽</p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Подберите аромат по вкусу</h2>
            <p className="text-muted-foreground">Выберите понравившиеся ноты и получите персональные рекомендации</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {fragranceNotes.map((note) => (
              <Button
                key={note.id}
                variant={selectedNotes.includes(note.id) ? "default" : "outline"}
                size="lg"
                onClick={() => toggleNote(note.id)}
                className="gap-2"
              >
                <Icon name={note.icon as any} className="h-4 w-4" />
                {note.label}
              </Button>
            ))}
          </div>

          {selectedNotes.length > 0 && (
            <div className="mb-8 p-4 bg-primary/5 rounded-lg text-center">
              <p className="text-sm font-medium">
                Показаны ароматы с нотами: {selectedNotes.map(id => fragranceNotes.find(n => n.id === id)?.label).join(", ")}
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getRecommendations().map((perfume) => (
              <Card key={perfume.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardDescription>{perfume.brand}</CardDescription>
                      <CardTitle className="mt-1">{perfume.name}</CardTitle>
                    </div>
                    <Badge variant="secondary">{perfume.price.toLocaleString()}₽</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{perfume.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {perfume.notes.map((noteId) => {
                      const note = fragranceNotes.find(n => n.id === noteId);
                      return (
                        <Badge key={noteId} variant="outline" className="text-xs">
                          {note?.label}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button
                    className="flex-1"
                    onClick={() => setCartCount(cartCount + 1)}
                  >
                    <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                    В корзину
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">О нас</h2>
              <p className="text-muted-foreground mb-4">
                PARFUM — это современный интернет-магазин оригинальной парфюмерии. 
                Мы предлагаем широкий ассортимент ароматов от мировых брендов и помогаем 
                каждому клиенту найти свой идеальный парфюм.
              </p>
              <p className="text-muted-foreground mb-6">
                Наша уникальная система рекомендаций анализирует ваши предпочтения и 
                подбирает ароматы, которые точно вам понравятся.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Ароматов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10000+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">Довольных</div>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden">
              <img
                src="/img/5343f2e6-af6a-47eb-9cb3-c49cf4b43e87.jpg"
                alt="About us"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Доставка и оплата</h2>
          
          <Tabs defaultValue="delivery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="delivery" className="gap-2">
                <Icon name="Truck" className="h-4 w-4" />
                Доставка
              </TabsTrigger>
              <TabsTrigger value="payment" className="gap-2">
                <Icon name="CreditCard" className="h-4 w-4" />
                Оплата
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="delivery" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Package" className="h-5 w-5 text-primary" />
                    Курьерская доставка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Доставка по Москве и Санкт-Петербургу — 1-2 дня. Бесплатно от 3000₽.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Стоимость: 300₽
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="h-5 w-5 text-primary" />
                    Доставка по России
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Доставка в регионы России — 3-7 дней. Бесплатно от 5000₽.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Стоимость: от 400₽
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Store" className="h-5 w-5 text-primary" />
                    Самовывоз
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Бесплатный самовывоз из пунктов выдачи. Более 200 точек по всей России.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payment" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CreditCard" className="h-5 w-5 text-primary" />
                    Банковские карты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Принимаем к оплате карты Visa, MasterCard, МИР. Безопасная оплата через защищенное соединение.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Wallet" className="h-5 w-5 text-primary" />
                    Электронные кошельки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Оплата через СБП, ЮMoney, QIWI и другие электронные платежные системы.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Banknote" className="h-5 w-5 text-primary" />
                    Наличные при получении
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Оплата наличными курьеру при получении заказа (только для Москвы и СПб).
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Отзывы наших клиентов</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Часто задаваемые вопросы</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Как я могу быть уверен в подлинности парфюма?</AccordionTrigger>
              <AccordionContent>
                Мы работаем только с официальными дистрибьюторами и предоставляем сертификаты подлинности на всю продукцию. 
                Каждый флакон имеет защитные голограммы и уникальный код проверки.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Можно ли вернуть парфюм, если он не подошел?</AccordionTrigger>
              <AccordionContent>
                Да, вы можете вернуть товар в течение 14 дней при условии, что флакон не вскрыт и сохранена оригинальная упаковка.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Как работает система рекомендаций?</AccordionTrigger>
              <AccordionContent>
                Наша система анализирует ваши предпочтения по нотам аромата и подбирает парфюмы, которые соответствуют вашему вкусу. 
                Просто выберите понравившиеся ноты, и мы покажем подходящие ароматы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Есть ли программа лояльности?</AccordionTrigger>
              <AccordionContent>
                Да! При каждой покупке вы получаете бонусные баллы, которые можно использовать для оплаты следующих заказов. 
                1 балл = 1 рубль скидки.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="blog" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Блог</h2>
            <p className="text-muted-foreground">Полезные статьи о парфюмерии</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardDescription>{post.date}</CardDescription>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="gap-2 px-0">
                    Читать далее
                    <Icon name="ArrowRight" className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Специальное предложение</h2>
          <p className="text-lg mb-8 opacity-90">Скидка 20% на первый заказ при подписке на рассылку</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Введите ваш email"
              className="flex-1 px-4 py-2 rounded-lg text-foreground"
            />
            <Button size="lg" variant="secondary">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-12 border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">PARFUM</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Оригинальная парфюмерия с персональными рекомендациями
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Женские ароматы</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Мужские ароматы</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Унисекс</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Новинки</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#delivery" className="hover:text-foreground transition-colors">Доставка</a></li>
                <li><a href="#payment" className="hover:text-foreground transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Гарантии</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <a href="tel:+79999999999" className="hover:text-foreground transition-colors">+7 (999) 999-99-99</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <a href="mailto:info@parfum.ru" className="hover:text-foreground transition-colors">info@parfum.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  <span>Москва, ул. Примерная, 1</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 PARFUM. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
