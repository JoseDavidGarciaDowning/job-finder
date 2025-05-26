import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

const Filtrar: React.FC = () => {

    const [sliderValue, setSliderValue] = useState(13);
    
 
    const [selectedJobType, setSelectedJobType] = useState('TIEMPO COMPLETO');
    

    const percentage = ((sliderValue - 13) / (25 - 13)) * 100;

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Filtrar Busqueda</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding bg-gray-100">
                <div className="max-w-md mx-auto bg-white rounded-3xl shadow-sm p-6">
          
                    <div className="flex items-center mb-8">
                        <button className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h1 className="text-xl font-medium text-center flex-1 pr-7">Filtrar Busqueda</h1>
                    </div>

                
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
                        <div className="relative">
                            <div className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl">
                                Design
                            </div>
                        </div>
                    </div>

                  
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sub Categoria</label>
                        <div className="relative">
                            <div className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl">
                                UI/UX Design
                            </div>
                        </div>
                    </div>

                  
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación</label>
                        <div className="relative">
                            <div className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl">
                                California
                            </div>
                        </div>
                    </div>

                 
                    <div className="mb-6">
                        <div className="flex justify-between mb-2">
                            <label className="block text-sm font-medium text-gray-700">Salario Minimo</label>
                            <span className="block text-sm font-medium text-gray-700">Salario Maximo</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <label className="block text-sm font-medium text-gray-700">Salario</label>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        
                     
                        <div className="relative pt-5 pb-10 mt-4">
                       
                            <input
                                type="range"
                                min="13"
                                max="25"
                                value={sliderValue}
                                onChange={(e) => setSliderValue(parseInt(e.target.value))}
                                className="w-full appearance-none bg-transparent absolute top-1/2 transform -translate-y-1/2 h-5 opacity-0 cursor-pointer z-10"
                            />
                            
                      
                            <div className="w-full h-0.5 bg-gray-200 absolute top-1/2 transform -translate-y-1/2"></div>
                            
                        
                            <div 
                                className="h-0.5 bg-orange-400 absolute top-1/2 transform -translate-y-1/2" 
                                style={{ left: '0%', width: `${percentage}%` }}
                            ></div>
                            
                         
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2.5 w-5 h-5 rounded-full bg-white border-2 border-orange-500"></div>
                            
                          
                            <div 
                                className="absolute top-1/2 transform -translate-y-1/2 -ml-2.5 w-5 h-5 rounded-full bg-white border-2 border-orange-500"
                                style={{ left: `${percentage}%` }}
                            ></div>
                        
                            <div className="absolute left-0 top-full -ml-4 text-xs font-medium text-gray-700 mt-1">$13k</div>
                            <div className="absolute right-0 top-full -mr-4 text-xs font-medium text-gray-700 mt-1">$25k</div>
                        </div>
                    </div>

                  
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Trabajo</label>
                        <div className="grid grid-cols-3 gap-2">
                            <button 
                                className={`py-2 px-4 text-center text-sm rounded-lg ${selectedJobType === 'TIEMPO COMPLETO' ? 'bg-orange-100 text-orange-800' : 'bg-gray-50'}`}
                                onClick={() => setSelectedJobType('TIEMPO COMPLETO')}
                            >
                                TIEMPO COMPLETO
                            </button>
                            <button 
                                className={`py-2 px-4 text-center text-sm rounded-lg ${selectedJobType === 'TIEMPO MEDIO' ? 'bg-orange-100 text-orange-800' : 'bg-gray-50'}`}
                                onClick={() => setSelectedJobType('TIEMPO MEDIO')}
                            >
                               TIEMPO MEDIO
                            </button>
                            <button 
                                className={`py-2 px-4 text-center text-sm rounded-lg ${selectedJobType === 'REMOTO' ? 'bg-orange-100 text-orange-800' : 'bg-gray-50'}`}
                                onClick={() => setSelectedJobType('REMOTO')}
                            >
                               REMOTO
                            </button>
                        </div>
                    </div>

                    <button className="w-full py-3 bg-indigo-900 text-white font-medium rounded-xl hover:bg-indigo-800 transition-colors">
                        BUSCAR AHORA
                    </button>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Filtrar;