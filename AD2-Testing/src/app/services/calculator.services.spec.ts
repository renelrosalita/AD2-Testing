import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";


fdescribe('Caculator Service-Rosalita', () => {
    let loggerSpy: any;
    let calculator: CalculatorService;

    beforeEach(() => {
        console.log('Before Each');

        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

        TestBed.configureTestingModule({
            providers: [CalculatorService,{
                provide: LoggerService,
                useValue: loggerSpy
                }
            ]
        })

        calculator = TestBed.inject(CalculatorService);
    })

    it('should add 2 numbers', () => {
        console.log('Add Each')
        let result = calculator.add(2, 2);

        expect(loggerSpy.log).toHaveBeenCalled();
        expect(loggerSpy.log).toHaveBeenCalledWith('Addition operation called');
        expect (result).toBe(4);

        expect(result).not.toBe(3);
    });

    it('should subtract 2 numbers', () => {
        console.log('Subtract Each');
        let result = calculator.subtract(2, 2);

        expect(loggerSpy.log).toHaveBeenCalled();
        expect(loggerSpy.log).toHaveBeenCalledWith('Subtraction operation called');
        expect (result).toBe(0);
    }); 

    it('should divide 2 numbers', () => {
        console.log('Divide Each');
        let result = calculator.divide(2, 2);

        expect(loggerSpy.log).toHaveBeenCalled();
        expect(loggerSpy.log).toHaveBeenCalledWith('Division operation called');
        expect (result).toBe(1);
    }); 

    it('should multiply 2 numbers', () => {
        console.log('Multiply Each');
        let result = calculator.multiply(2, 2);

        expect(loggerSpy.log).toHaveBeenCalled();
        expect(loggerSpy.log).toHaveBeenCalledWith('Multiplication operation called');
        expect (result).toBe(4);

        expect(result).not.toBe(0);
    }); 


})