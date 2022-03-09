import { RuleConfig } from "src/config/RulesConfig";
import ICommissionCalculator from "../strategy/ICommissionCalculator";
import DefaultStrategy from "../strategy/DefaultStrategy";
import ClientWithDiscountStrategy from "../strategy/ClientWithDiscountStrategy";
import HighTurnoverStrategy from "../strategy/HighTurnoverStrategy";

const activeRules: RuleConfig = require("resources/ruleconfig.json");

export default class CommisionFactory {
    
    public async commision(amount: number, client_id: number, date: Date): Promise<Number> {
        var commision : Number;
        // TRIED THIS WAY, BUT COULD NOT CREATE CLASS FROM STRING NAME
        /*
        activeRules.rules.map(rule => {
            const strategy : ICommissionCalculator = eval(`new ${rule}()`);
            console.log("CREATED")
            var strategyCommision = strategy.calculateCommision(client_id, amount);
            if(commision == undefined || (strategyCommision != undefined && commision > strategyCommision)){
                commision = strategyCommision;
            }
        });
        */
        commision = new DefaultStrategy().calculateCommision(client_id, amount, date);
       
        const commisionTwo = new ClientWithDiscountStrategy().calculateCommision(client_id, amount, date);

        if(commisionTwo != undefined && commisionTwo < commision){
            commision = commisionTwo;
        }

        const commisionThree = await new HighTurnoverStrategy().calculateCommision(client_id, amount, date);

        if(commisionThree != undefined && commisionThree < commision){
            commision = commisionThree;
        }

        return commision;
    }
}