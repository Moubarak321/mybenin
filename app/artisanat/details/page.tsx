"use client";
import React, { useState, useEffect } from 'react';
import {
    ArrowLeft, Star, Heart, Share2, MapPin, Clock, Users,
    Camera, Play, Volume2, Info, ShoppingCart, MessageCircle,
    Award, Globe, Calendar, Truck, Shield, ChevronLeft, ChevronRight
} from 'lucide-react';

const MasqueGelede = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('medium');
    const [activeTab, setActiveTab] = useState('description');
    const [isPlaying, setIsPlaying] = useState(false);

    const images = [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1544967882-c2b6c2827d7b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1580911867074-88db14b3b04c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop'
    ];

    const sizes = [
        { id: 'small', name: 'Petit', price: 25000, dimensions: '15 x 20 cm' },
        { id: 'medium', name: 'Moyen', price: 45000, dimensions: '25 x 30 cm' },
        { id: 'large', name: 'Grand', price: 85000, dimensions: '35 x 45 cm' },
        { id: 'xlarge', name: 'Très Grand', price: 150000, dimensions: '50 x 60 cm' }
    ];

    const reviews = [
        {
            name: 'Marie Dubois',
            rating: 5,
            date: '15 Mai 2024',
            comment: 'Magnifique pièce d\'art ! La qualité de sculpture est exceptionnelle et l\'histoire culturelle fascinante.',
            verified: true
        },
        {
            name: 'Jean-Claude Tognon',
            rating: 5,
            date: '8 Mai 2024',
            comment: 'Authentique et très bien conservé. Maître Adéchina est un véritable artiste. Livraison parfaite.',
            verified: true
        },
        {
            name: 'Sarah Johnson',
            rating: 4,
            date: '2 Mai 2024',
            comment: 'Beautiful craftsmanship. The cultural significance makes it even more special. Highly recommended!',
            verified: false
        }
    ];

    const relatedProducts = [
        {
            id: 1,
            name: 'Masque Egun',
            price: '35,000 FCFA',
            image: 'https://images.unsplash.com/photo-1580911867074-88db14b3b04c?w=300&h=200&fit=crop',
            rating: 4.7
        },
        {
            id: 2,
            name: 'Statuette Ancestrale',
            price: '65,000 FCFA',
            image: 'https://images.unsplash.com/photo-1544967882-c2b6c2827d7b?w=300&h=200&fit=crop',
            rating: 4.9
        },
        {
            id: 3,
            name: 'Masque Dan',
            price: '55,000 FCFA',
            image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=300&h=200&fit=crop',
            rating: 4.6
        }
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const selectedSizeInfo = sizes.find(size => size.id === selectedSize);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
            

            <div className="max-w-7xl mt-12 mx-auto px-4 py-8">
                <div className="grid grid-cols-1 mt-12  lg:grid-cols-2 gap-12 mb-16">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 group">
                            <img
                                src={images[currentImage]}
                                alt="Masque Gelede"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Video Play Button */}
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="absolute bottom-4 right-4 p-3 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-lg"
                            >
                                <Play className="w-6 h-6" />
                            </button>

                            {/* Image Counter */}
                            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                {currentImage + 1} / {images.length}
                            </div>
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${currentImage === index ? 'border-amber-500' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <img src={image} alt={`Vue ${index + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        {/* Title and Rating */}
                        <div>
                            <div className="flex items-center space-x-2 text-sm text-amber-600 mb-2">
                                <Award className="w-4 h-4" />
                                <span className="font-medium">Patrimoine Culturel UNESCO</span>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Masques Gelede Traditionnels</h1>
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                                    ))}
                                    <span className="text-gray-600 ml-2">(4.8 - 127 avis)</span>
                                </div>
                            </div>

                            {/* Artisan Info */}
                            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                                    alt="Maître Adéchina"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">Maître Adéchina Koudogbo</p>
                                    <p className="text-sm text-gray-600">Maître sculpteur - 25 ans d'expérience</p>
                                </div>
                                <button className="ml-auto bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors">
                                    <MessageCircle className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Taille et Prix</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {sizes.map((size) => (
                                    <button
                                        key={size.id}
                                        onClick={() => setSelectedSize(size.id)}
                                        className={`p-4 rounded-xl border-2 text-left transition-all ${selectedSize === size.id
                                                ? 'border-amber-500 bg-amber-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <div className="font-semibold">{size.name}</div>
                                        <div className="text-sm text-gray-600">{size.dimensions}</div>
                                        <div className="text-lg font-bold text-amber-600">{size.price.toLocaleString()} FCFA</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <label className="font-semibold text-gray-900">Quantité:</label>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-2 hover:bg-gray-100 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 font-medium">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-2 hover:bg-gray-100 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                                    <ShoppingCart className="w-5 h-5" />
                                    <span>Ajouter au Panier</span>
                                </button>
                                <button className="px-6 py-4 border-2 border-amber-500 text-amber-600 rounded-xl font-bold hover:bg-amber-50 transition-colors">
                                    Acheter Maintenant
                                </button>
                            </div>
                        </div>

                        {/* Shipping and guarantees */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                            <div className="flex items-center space-x-2 text-sm">
                                <Truck className="w-5 h-5 text-amber-500" />
                                <span>Livraison 3-7 jours</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Shield className="w-5 h-5 text-green-500" />
                                <span>Authenticité garantie</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Globe className="w-5 h-5 text-blue-500" />
                                <span>Expédition mondiale</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
                    <div className="border-b border-gray-200">
                        <div className="flex space-x-8 px-8">
                            {[
                                { id: 'description', name: 'Description', icon: Info },
                                { id: 'history', name: 'Histoire & Culture', icon: Calendar },
                                { id: 'artisan', name: 'L\'Artisan', icon: Users },
                                { id: 'reviews', name: 'Avis (127)', icon: Star }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${activeTab === tab.id
                                            ? 'border-amber-500 text-amber-600'
                                            : 'border-transparent text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    <tab.icon className="w-5 h-5" />
                                    <span className="font-medium">{tab.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-8">
                        {activeTab === 'description' && (
                            <div className="prose max-w-none">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Description du Masque Gelede</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Les masques Gelede sont des œuvres d'art sacrées de la tradition yoruba, représentant une forme unique
                                    d'expression artistique et spirituelle. Sculptés dans du bois d'iroko ou d'acajou, ces masques incarnent
                                    la puissance mystique des ancêtres et des divinités féminines.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Caractéristiques:</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Bois d'iroko massif sculpté à la main</li>
                                            <li>• Peintures naturelles traditionnelles</li>
                                            <li>• Motifs géométriques symboliques</li>
                                            <li>• Finition à l'huile de palme</li>
                                            <li>• Pièce unique, signée par l'artisan</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Utilisation:</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Décoration d'intérieur authentique</li>
                                            <li>• Collection d'art africain</li>
                                            <li>• Pièce de musée personnelle</li>
                                            <li>• Cadeau culturel prestigieux</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'history' && (
                            <div className="prose max-w-none">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Histoire et Signification Culturelle</h3>
                                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl mb-6">
                                    <h4 className="font-bold text-amber-800 mb-2">Patrimoine UNESCO</h4>
                                    <p className="text-amber-700">
                                        Les masques Gelede sont reconnus par l'UNESCO comme chef-d'œuvre du patrimoine oral
                                        et immatériel de l'humanité depuis 2001.
                                    </p>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    La tradition Gelede trouve ses origines dans l'ancien royaume du Dahomey, aujourd'hui le Bénin.
                                    Ces masques sont utilisés lors de cérémonies rituelles pour honorer "Iya Nla" (la Grande Mère),
                                    l'esprit primordial féminin dans la cosmogonie yoruba.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Chaque masque raconte une histoire, porte un message social ou spirituel. Les motifs sculptés
                                    ne sont pas décoratifs mais symboliques, représentant des proverbes, des leçons morales ou
                                    des liens avec le monde des ancêtres.
                                </p>
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h4 className="font-bold text-gray-900 mb-2">Symbolisme des Couleurs:</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                                            <span className="text-gray-700">Rouge: Puissance et protection</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
                                            <span className="text-gray-700">Blanc: Pureté et sagesse</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-black rounded-full"></div>
                                            <span className="text-gray-700">Noir: Fertilité et mystère</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                                            <span className="text-gray-700">Bleu: Sérénité et eau</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'artisan' && (
                            <div className="prose max-w-none">
                                <div className="flex items-start space-x-6 mb-8">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                                        alt="Maître Adéchina"
                                        className="w-32 h-32 rounded-full object-cover border-4 border-amber-200"
                                    />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Maître Adéchina Koudogbo</h3>
                                        <p className="text-amber-600 font-medium mb-2">Maître Sculpteur Traditionnel</p>
                                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                                            <span className="flex items-center space-x-1">
                                                <Clock className="w-4 h-4" />
                                                <span>25 ans d'expérience</span>
                                            </span>
                                            <span className="flex items-center space-x-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>Porto-Novo, Bénin</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Né dans une famille d'artisans sculpteurs à Porto-Novo, Maître Adéchina a appris l'art de la
                                    sculpture dès son plus jeune âge auprès de son grand-père, gardien des traditions ancestrales.
                                    Initié aux secrets de la sculpture traditionnelle yoruba, il perpétue un savoir-faire
                                    transmis de génération en génération.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gray-50 p-6 rounded-xl">
                                        <h4 className="font-bold text-gray-900 mb-3">Réalisations</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Plus de 500 masques sculptés</li>
                                            <li>• Expositions internationales</li>
                                            <li>• Formations pour jeunes artisans</li>
                                            <li>• Collaborations avec musées</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-xl">
                                        <h4 className="font-bold text-gray-900 mb-3">Reconnaissances</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Trésor Humain Vivant UNESCO</li>
                                            <li>• Prix National des Arts</li>
                                            <li>• Médaille d'Or Artisanat</li>
                                            <li>• Membre Académie des Arts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900">Avis Clients</h3>
                                    <button className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors">
                                        Écrire un avis
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                                    <div className="md:col-span-1">
                                        <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                                            <div className="text-4xl font-bold text-amber-600 mb-2">4.8</div>
                                            <div className="flex justify-center mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                                                ))}
                                            </div>
                                            <div className="text-sm text-gray-600">127 avis</div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-3 space-y-6">
                                        {reviews.map((review, index) => (
                                            <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <div className="flex items-center space-x-2 mb-1">
                                                            <span className="font-semibold text-gray-900">{review.name}</span>
                                                            {review.verified && (
                                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                                                    Achat vérifié
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <div className="flex">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star
                                                                        key={i}
                                                                        className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-gray-300'
                                                                            }`}
                                                                    />
                                                                ))}
                                                            </div>
                                                            <span className="text-sm text-gray-500">{review.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Produits <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Similaires</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-amber-600">{product.price}</span>
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                                            <span className="text-sm text-gray-600">{product.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasqueGelede;