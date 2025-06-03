"use client";
import React, { useState, useEffect } from 'react';
import {
    ArrowLeft, Clock, Users, Star, Heart, Share2, Play, Pause,
    ChefHat, Utensils, ShoppingCart, BookOpen, Camera, Timer,
    Flame, Thermometer, Award, MapPin, Volume2, VolumeX,
    CheckCircle, Circle, Plus, Minus, MessageCircle, Flag
} from 'lucide-react';

const AmiwoRecipeDetail = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [servings, setServings] = useState(4);
    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState(new Set());
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [cookingTimer, setCookingTimer] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState('recipe');

    const baseIngredients = [
        { name: 'Haricots cornille (niébé)', quantity: 250, unit: 'g', category: 'base' },
        { name: 'Riz local', quantity: 200, unit: 'g', category: 'base' },
        { name: 'Huile de palme rouge', quantity: 4, unit: 'cuillères à soupe', category: 'base' },
        { name: 'Oignons', quantity: 2, unit: 'moyens', category: 'légumes' },
        { name: 'Tomates fraîches', quantity: 3, unit: 'grosses', category: 'légumes' },
        { name: 'Piment rouge', quantity: 2, unit: 'pièces', category: 'épices' },
        { name: 'Ail', quantity: 4, unit: 'gousses', category: 'épices' },
        { name: 'Gingembre frais', quantity: 1, unit: 'morceau', category: 'épices' },
        { name: 'Bouillon de poisson fumé', quantity: 2, unit: 'cubes', category: 'assaisonnement' },
        { name: 'Sel', quantity: 1, unit: 'cuillère à café', category: 'assaisonnement' },
        { name: 'Poivre noir', quantity: 0.5, unit: 'cuillère à café', category: 'épices' },
        { name: 'Feuilles de laurier', quantity: 2, unit: 'feuilles', category: 'herbes' },
        { name: 'Crevettes séchées (optionnel)', quantity: 50, unit: 'g', category: 'protéines' },
        { name: 'Poisson fumé', quantity: 200, unit: 'g', category: 'protéines' }
    ];

    const cookingSteps = [
        {
            title: 'Préparation des haricots',
            duration: 15,
            difficulty: 'Facile',
            instruction: 'Triez et lavez les haricots cornille. Faites-les tremper dans l\'eau tiède pendant 2-3 heures pour ramollir.',
            tips: 'Vous pouvez faire tremper toute une nuit pour gagner du temps le lendemain.',
            image: 'https://images.unsplash.com/photo-1586825603711-1e3d4c938c33?w=400&h=300&fit=crop'
        },
        {
            title: 'Cuisson des haricots',
            duration: 45,
            difficulty: 'Facile',
            instruction: 'Égouttez et rincez les haricots. Faites-les cuire dans une casserole avec beaucoup d\'eau salée pendant 30-45 minutes jusqu\'à ce qu\'ils soient tendres.',
            tips: 'Ajoutez les feuilles de laurier pendant la cuisson pour plus de saveur.',
            image: 'https://images.unsplash.com/photo-1559847844-d7b4ac46ff6a?w=400&h=300&fit=crop'
        },
        {
            title: 'Préparation du riz',
            duration: 20,
            difficulty: 'Facile',
            instruction: 'Lavez le riz à l\'eau froide jusqu\'à ce que l\'eau soit claire. Faites cuire dans l\'eau salée pendant 15-20 minutes jusqu\'à ce qu\'il soit al dente.',
            tips: 'Le riz doit rester légèrement ferme car il va continuer à cuire avec les haricots.',
            image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop'
        },
        {
            title: 'Préparation de la base',
            duration: 20,
            difficulty: 'Moyen',
            instruction: 'Émincez les oignons, hachez l\'ail et le gingembre. Coupez les tomates en dés. Écrasez légèrement les piments selon votre goût.',
            tips: 'Portez des gants pour manipuler les piments et éviter les irritations.',
            image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop'
        },
        {
            title: 'Préparation de la sauce',
            duration: 25,
            difficulty: 'Moyen',
            instruction: 'Chauffez l\'huile de palme dans une grande casserole. Faites revenir les oignons, puis ajoutez l\'ail, le gingembre et les piments. Incorporez les tomates et laissez mijoter.',
            tips: 'L\'huile de palme ne doit pas être trop chaude pour éviter qu\'elle devienne amère.',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
        },
        {
            title: 'Assemblage et cuisson finale',
            duration: 30,
            difficulty: 'Moyen',
            instruction: 'Ajoutez les haricots cuits et le riz dans la sauce. Incorporez le poisson fumé émietté, les crevettes séchées, le bouillon et les assaisonnements. Laissez mijoter à feu doux.',
            tips: 'Remuez délicatement pour ne pas écraser les haricots et le riz.',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'
        },
        {
            title: 'Finition et service',
            duration: 5,
            difficulty: 'Facile',
            instruction: 'Goûtez et ajustez l\'assaisonnement. Laissez reposer 5 minutes avant de servir. Garnissez avec des crevettes fraîches ou du poisson grillé selon votre goût.',
            tips: 'Servez chaud accompagné de bananes plantains frites ou d\'avocat.',
            image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop'
        }
    ];

    const nutritionInfo = {
        calories: 420,
        proteins: 18,
        carbs: 65,
        fats: 12,
        fiber: 8,
        sodium: 850
    };

    const reviews = [
        {
            name: 'Maman Célestine',
            rating: 5,
            date: '2 jours',
            comment: 'Recette authentique ! Exactement comme ma grand-mère le faisait. Les proportions sont parfaites.',
            verified: true,
            helpful: 24
        },
        {
            name: 'Chef Marcel',
            rating: 5,
            date: '1 semaine',
            comment: 'Excellente recette traditionnelle. J\'ai ajouté un peu plus de piment, parfait pour mon restaurant.',
            verified: true,
            helpful: 18
        },
        {
            name: 'Sophie Leblanc',
            rating: 4,
            date: '2 semaines',
            comment: 'Première fois que je cuisine béninois, très réussi ! La vidéo aide beaucoup.',
            verified: false,
            helpful: 12
        }
    ];

    const adjustedIngredients = baseIngredients.map(ingredient => ({
        ...ingredient,
        adjustedQuantity: (ingredient.quantity * servings) / 4
    }));

    const totalCookingTime = cookingSteps.reduce((total, step) => total + step.duration, 0);

    const toggleStepCompletion = (index: unknown) => {
        const newCompleted = new Set(completedSteps);
        if (newCompleted.has(index)) {
            newCompleted.delete(index);
        } else {
            newCompleted.add(index);
        }
        setCompletedSteps(newCompleted);
    };

    const startTimer = (minutes: number) => {
        setCookingTimer(minutes * 60);
    };

    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;
        if (cookingTimer !== null && cookingTimer > 0) {
            interval = setInterval(() => {
                setCookingTimer(prev => (prev !== null ? prev - 1 : null));
            }, 1000);
        } else if (cookingTimer === 0) {
            // Timer finished - could add notification here
            setCookingTimer(null);
        }
        return () => clearInterval(interval);
    }, [cookingTimer]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen mt-12 bg-gradient-to-br from-green-50 via-white to-yellow-50">
            {/* Header Navigation */}
            

            <div className="max-w-7xl mt-12 mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className="grid grid-cols-1 mt-12 lg:grid-cols-2 gap-12 mb-12">
                    {/* Video/Image */}
                    <div className="space-y-4">
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 group">
                            <img
                                src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop"
                                alt="Amiwo traditionnel"
                                className={`w-full h-full object-cover transition-opacity duration-300 ${isVideoPlaying ? 'opacity-50' : 'opacity-100'}`}
                            />

                            {/* Video Controls Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                                    className="bg-white/90 hover:bg-white text-gray-900 p-4 rounded-full shadow-lg transition-all transform hover:scale-105"
                                >
                                    {isVideoPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                                </button>
                            </div>

                            {/* Video Controls */}
                            <div className="absolute bottom-4 right-4 flex space-x-2">
                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                                >
                                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                </button>
                                <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                                    <Camera className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Video Duration */}
                            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                8:42
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                                <Clock className="w-6 h-6 text-green-500 mx-auto mb-2" />
                                <div className="text-sm font-medium text-gray-900">{totalCookingTime} min</div>
                                <div className="text-xs text-gray-500">Total</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                                <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                                <div className="text-sm font-medium text-gray-900">{servings} pers.</div>
                                <div className="text-xs text-gray-500">Portions</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                                <Flame className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                                <div className="text-sm font-medium text-gray-900">Moyen</div>
                                <div className="text-xs text-gray-500">Difficulté</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                                <Award className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                                <div className="text-sm font-medium text-gray-900">4.9</div>
                                <div className="text-xs text-gray-500">Note</div>
                            </div>
                        </div>
                    </div>

                    {/* Recipe Info */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center space-x-2 text-sm text-green-600 mb-2">
                                <Flag className="w-4 h-4" />
                                <span className="font-medium">Plat Traditionnel Béninois</span>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Amiwo</h1>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                L'Amiwo est un plat traditionnel béninois, mélange savoureux de haricots cornille et de riz,
                                mijoté dans une sauce riche à l'huile de palme. Un véritable symbole de la gastronomie locale.
                            </p>

                            <div className="flex items-center space-x-4 mb-6">
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                    <span className="text-gray-600 ml-2">(4.9 - 89 avis)</span>
                                </div>
                            </div>
                        </div>

                        {/* Servings Adjuster */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Portions</h3>
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={() => setServings(Math.max(1, servings - 1))}
                                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="text-2xl font-bold text-green-600 min-w-[3rem] text-center">{servings}</span>
                                    <button
                                        onClick={() => setServings(servings + 1)}
                                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Temps de prep:</span>
                                    <span className="font-medium">20 min</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Cuisson:</span>
                                    <span className="font-medium">{totalCookingTime - 20} min</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Calories/portion:</span>
                                    <span className="font-medium">{nutritionInfo.calories} kcal</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Coût estimé:</span>
                                    <span className="font-medium">{(1200 * servings / 4).toLocaleString()} FCFA</span>
                                </div>
                            </div>
                        </div>

                        {/* Origin Info */}
                        <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-xl border border-green-100">
                            <div className="flex items-center space-x-3 mb-3">
                                <MapPin className="w-5 h-5 text-green-600" />
                                <h3 className="font-semibold text-gray-900">Origine et Tradition</h3>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                L'Amiwo trouve ses origines dans les régions du Sud-Bénin, particulièrement populaire
                                à Porto-Novo et Cotonou. Ce plat symbolise l'unité et le partage dans la culture béninoise,
                                souvent préparé lors des grandes occasions familiales.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                    <div className="border-b border-gray-200">
                        <div className="flex space-x-8 px-8 overflow-x-auto">
                            {[
                                { id: 'recipe', name: 'Recette', icon: BookOpen },
                                { id: 'ingredients', name: 'Ingrédients', icon: ShoppingCart },
                                { id: 'nutrition', name: 'Nutrition', icon: Thermometer },
                                { id: 'reviews', name: 'Avis (89)', icon: Star }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 py-4 border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
                                            ? 'border-green-500 text-green-600'
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
                        {activeTab === 'recipe' && (
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Préparation Étape par Étape</h2>
                                    <p className="text-gray-600">Suivez notre guide détaillé pour réussir votre Amiwo traditionnel</p>
                                </div>

                                <div className="space-y-6">
                                    {cookingSteps.map((step, index) => (
                                        <div
                                            key={index}
                                            className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${completedSteps.has(index)
                                                    ? 'border-green-500 bg-green-50'
                                                    : activeStep === index
                                                        ? 'border-blue-500 bg-blue-50'
                                                        : 'border-gray-200 bg-white hover:border-gray-300'
                                                }`}
                                        >
                                            <div className="flex items-start space-x-6">
                                                {/* Step Number */}
                                                <div className="flex-shrink-0">
                                                    <button
                                                        onClick={() => toggleStepCompletion(index)}
                                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${completedSteps.has(index)
                                                                ? 'bg-green-500 text-white'
                                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                            }`}
                                                    >
                                                        {completedSteps.has(index) ? (
                                                            <CheckCircle className="w-6 h-6" />
                                                        ) : (
                                                            index + 1
                                                        )}
                                                    </button>
                                                </div>

                                                {/* Step Image */}
                                                <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden">
                                                    <img
                                                        src={step.image}
                                                        alt={step.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                {/* Step Content */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                                                                <Clock className="w-4 h-4" />
                                                                <span>{step.duration} min</span>
                                                            </div>
                                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${step.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                                                                    step.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-800' :
                                                                        'bg-red-100 text-red-800'
                                                                }`}>
                                                                {step.difficulty}
                                                            </span>
                                                            <button
                                                                onClick={() => startTimer(step.duration)}
                                                                className="flex items-center space-x-1 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium hover:bg-orange-200 transition-colors"
                                                            >
                                                                <Timer className="w-3 h-3" />
                                                                <span>Timer</span>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <p className="text-gray-700 leading-relaxed mb-3">{step.instruction}</p>

                                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                                                        <div className="flex items-start space-x-2">
                                                            <ChefHat className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                                            <p className="text-sm text-yellow-800"><strong>Conseil :</strong> {step.tips}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'ingredients' && (
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Liste des Ingrédients</h2>
                                    <p className="text-gray-600">Quantités ajustées pour {servings} personnes</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Ingredients List */}
                                    <div className="space-y-6">
                                        {['base', 'légumes', 'épices', 'assaisonnement', 'herbes', 'protéines'].map(category => {
                                            const categoryIngredients = adjustedIngredients.filter(ing => ing.category === category);
                                            if (categoryIngredients.length === 0) return null;

                                            return (
                                                <div key={category} className="bg-white p-6 rounded-xl border border-gray-200">
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                                                        {category === 'base' ? 'Ingrédients de base' :
                                                            category === 'légumes' ? 'Légumes' :
                                                                category === 'épices' ? 'Épices et aromates' :
                                                                    category === 'assaisonnement' ? 'Assaisonnement' :
                                                                        category === 'herbes' ? 'Herbes' :
                                                                            'Protéines'}
                                                    </h3>
                                                    <div className="space-y-3">
                                                        {categoryIngredients.map((ingredient, index) => (
                                                            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                                                                <span className="text-gray-700">{ingredient.name}</span>
                                                                <span className="font-medium text-gray-900">
                                                                    {ingredient.adjustedQuantity % 1 === 0
                                                                        ? ingredient.adjustedQuantity
                                                                        : ingredient.adjustedQuantity.toFixed(1)
                                                                    } {ingredient.unit}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Shopping Helper */}
                                    <div className="space-y-6">
                                        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                                <ShoppingCart className="w-5 h-5 text-green-600" />
                                                <span>Liste de courses</span>
                                            </h3>
                                            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors mb-4">
                                                Générer la liste de courses
                                            </button>
                                            <p className="text-sm text-gray-600">
                                                Coût estimé pour {servings} personnes : <strong>{(1200 * servings / 4).toLocaleString()} FCFA</strong>
                                            </p>
                                        </div>

                                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Substitutions possibles</h3>
                                            <div className="space-y-3 text-sm">
                                                <div>
                                                    <strong className="text-yellow-800">Huile de palme :</strong>
                                                    <p className="text-gray-700">Huile d'arachide + colorant alimentaire rouge</p>
                                                </div>
                                                <div>
                                                    <strong className="text-yellow-800">Haricots cornille :</strong>
                                                    <p className="text-gray-700">Haricots rouges ou haricots blancs</p>
                                                </div>
                                                <div>
                                                    <strong className="text-yellow-800">Poisson fumé :</strong>
                                                    <p className="text-gray-700">Poisson frais grillé ou viande fumée</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Équipement nécessaire</h3>
                                            <div className="space-y-2">
                                                {[
                                                    'Grande casserole (3-4L)',
                                                    'Casserole moyenne (pour le riz)',
                                                    'Passoire',
                                                    'Planche à découper',
                                                    'Couteau de cuisine',
                                                    'Cuillère en bois',
                                                    'Mortier et pilon (optionnel)'
                                                ].map((item, index) => (
                                                    <div key={index} className="flex items-center space-x-2">
                                                        <CheckCircle className="w-4 h-4 text-blue-500" />
                                                        <span className="text-gray-700">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'nutrition' && (
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Valeurs Nutritionnelles</h2>
                                    <p className="text-gray-600">Pour une portion de {servings} personnes</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Nutrition Facts */}
                                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations nutritionnelles</h3>

                                        <div className="space-y-4">
                                            {/* Calories */}
                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-gray-700">Calories</span>
                                                    <span className="font-medium">{nutritionInfo.calories} kcal</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-red-400 h-2 rounded-full"
                                                        style={{ width: `${Math.min(100, nutritionInfo.calories / 5)}%` }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {/* Proteins */}
                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-gray-700">Protéines</span>
                                                    <span className="font-medium">{nutritionInfo.proteins} g</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-blue-400 h-2 rounded-full"
                                                        style={{ width: `${Math.min(100, nutritionInfo.proteins * 5)}%` }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {/* Carbs */}
                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-gray-700">Glucides</span>
                                                    <span className="font-medium">{nutritionInfo.carbs} g</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-yellow-400 h-2 rounded-full"
                                                        style={{ width: `${Math.min(100, nutritionInfo.carbs * 2)}%` }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {/* Fats */}
                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-gray-700">Lipides</span>
                                                    <span className="font-medium">{nutritionInfo.fats} g</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-purple-400 h-2 rounded-full"
                                                        style={{ width: `${Math.min(100, nutritionInfo.fats * 5)}%` }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {/* Other nutrients */}
                                            <div className="grid grid-cols-2 gap-4 pt-4">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-700">Fibres</span>
                                                    <span className="font-medium">{nutritionInfo.fiber} g</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-700">Sodium</span>
                                                    <span className="font-medium">{nutritionInfo.sodium} mg</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-700">Vitamine A</span>
                                                    <span className="font-medium">15% AJR</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-700">Fer</span>
                                                    <span className="font-medium">20% AJR</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Health Info */}
                                    <div className="space-y-6">
                                        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bienfaits pour la santé</h3>
                                            <div className="space-y-3">
                                                <div className="flex items-start space-x-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <p className="text-gray-700">
                                                        <strong>Riche en protéines végétales :</strong> Les haricots cornille fournissent des protéines complètes et des acides aminés essentiels.
                                                    </p>
                                                </div>
                                                <div className="flex items-start space-x-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <p className="text-gray-700">
                                                        <strong>Source de fibres :</strong> Favorise la digestion et maintient la satiété plus longtemps.
                                                    </p>
                                                </div>
                                                <div className="flex items-start space-x-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <p className="text-gray-700">
                                                        <strong>Antioxydants :</strong> L'huile de palme rouge contient des caroténoïdes et de la vitamine E.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Allergènes</h3>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <span className="px-2 py-1 bg-white rounded text-sm font-medium border border-red-200">Poisson</span>
                                                    <span className="px-2 py-1 bg-white rounded text-sm font-medium border border-red-200">Crustacés</span>
                                                </div>
                                                <p className="text-sm text-gray-600 mt-2">
                                                    Contient du poisson fumé et des crevettes séchées. Peut être préparé sans ces ingrédients pour les personnes allergiques.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Variations diététiques</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-medium text-gray-800 mb-1">Végétarien :</h4>
                                                    <p className="text-sm text-gray-700">
                                                        Remplacer le poisson fumé par des champignons shiitake séchés et omettre les crevettes. Ajouter 1 cuillère à soupe de sauce soja pour l'umami.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800 mb-1">Sans gluten :</h4>
                                                    <p className="text-sm text-gray-700">
                                                        Vérifier que le bouillon utilisé ne contient pas de gluten. Le plat est naturellement sans gluten.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Avis des Cuisiniers</h2>
                                    <p className="text-gray-600">Ce que les autres pensent de cette recette</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Reviews List */}
                                    <div className="space-y-6">
                                        {reviews.map((review, index) => (
                                            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
                                                            {review.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900">{review.name}</h4>
                                                            <div className="flex items-center space-x-1">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star
                                                                        key={i}
                                                                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                                                    />
                                                                ))}
                                                                <span className="text-xs text-gray-500 ml-1">{review.date}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {review.verified && (
                                                        <span className="flex items-center space-x-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                                            <CheckCircle className="w-3 h-3" />
                                                            <span>Vérifié</span>
                                                        </span>
                                                    )}
                                                </div>

                                                <p className="text-gray-700 mb-4">{review.comment}</p>

                                                <div className="flex items-center justify-between">
                                                    <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 text-sm">
                                                        <MessageCircle className="w-4 h-4" />
                                                        <span>Répondre</span>
                                                    </button>
                                                    <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 text-sm">
                                                        <Heart className="w-4 h-4" />
                                                        <span>Utile ({review.helpful})</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Add Review */}
                                    <div className="space-y-6">
                                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Donnez votre avis</h3>

                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Votre note</label>
                                                    <div className="flex items-center space-x-1">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <button key={star} className="text-gray-300 hover:text-yellow-400">
                                                                <Star className="w-6 h-6" />
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Commentaire</label>
                                                    <textarea
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                        rows={4}
                                                        placeholder="Partagez votre expérience avec cette recette..."
                                                    ></textarea>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                                                        <input
                                                            type="text"
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                            placeholder="Votre nom"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                                        <input
                                                            type="email"
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                            placeholder="Votre email"
                                                        />
                                                    </div>
                                                </div>

                                                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                                                    Publier l'avis
                                                </button>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Questions fréquentes</h3>
                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="font-medium text-gray-800 mb-1">Peut-on congeler l'Amiwo ?</h4>
                                                    <p className="text-sm text-gray-700">
                                                        Oui, l'Amiwo se congèle bien. Placez-le dans un contenant hermétique et conservez jusqu'à 3 mois. Réchauffez avec un peu d'eau pour éviter qu'il ne sèche.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800 mb-1">Comment rendre le plat moins épicé ?</h4>
                                                    <p className="text-sm text-gray-700">
                                                        Réduisez la quantité de piment ou retirez les graines avant d'ajouter. Vous pouvez aussi ajouter un peu de sucre ou de lait de coco pour adoucir.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800 mb-1">Puis-je utiliser du riz basmati ?</h4>
                                                    <p className="text-sm text-gray-700">
                                                        Le riz local donne la meilleure texture, mais le basmati peut être utilisé. Réduisez le temps de cuisson car il est plus fragile.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Recipes */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Recettes Similaires</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Akassa",
                                description: "Pâte de maïs fermentée, spécialité du Sud-Bénin",
                                time: "40 min",
                                rating: 4.7,
                                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop"
                            },
                            {
                                title: "Sauce Claire",
                                description: "Sauce légère aux aubergines et poisson",
                                time: "35 min",
                                rating: 4.5,
                                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
                            },
                            {
                                title: "Djoumgblé",
                                description: "Haricots blancs à la sauce tomate",
                                time: "50 min",
                                rating: 4.8,
                                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
                            },
                            {
                                title: "Yovo Doko",
                                description: "Beignets de haricots, parfaits pour le petit-déjeuner",
                                time: "25 min",
                                rating: 4.9,
                                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop"
                            }
                        ].map((recipe, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <div className="relative aspect-video">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                                        {recipe.time}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 mb-1">{recipe.title}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{recipe.description}</p>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(recipe.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                            />
                                        ))}
                                        <span className="text-xs text-gray-500 ml-1">({recipe.rating})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-center text-white">
                    <h2 className="text-2xl font-bold mb-4">Prêt à cuisiner votre propre Amiwo ?</h2>
                    <p className="max-w-2xl mx-auto mb-6">Rejoignez notre communauté de plus de 50,000 cuisiniers passionnés et partagez vos créations culinaires.</p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                            Télécharger la recette en PDF
                        </button>
                        <button className="bg-green-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-950 transition-colors">
                            Voir toutes nos recettes béninoises
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-white text-lg font-medium mb-4">Gastronomie Béninoise</h3>
                            <p className="text-sm mb-4">Découvrez et préservez les saveurs authentiques du Bénin à travers nos recettes traditionnelles.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-medium mb-4">Navigation</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Recettes</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Techniques</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Ingrédients</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-medium mb-4">Catégories</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors">Plats principaux</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Entrées</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Desserts</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Boissons</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Végétarien</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-medium mb-4">Newsletter</h3>
                            <p className="text-sm mb-4">Abonnez-vous pour recevoir nos nouvelles recettes chaque semaine.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
                                />
                                <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors">
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
                        <p>© 2023 Gastronomie Béninoise. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AmiwoRecipeDetail;