import {sanityCheck} from "./core-language/sanity";
import {showPrimitiveDataTypes} from "./core-language/data-types-primitive";
import {showArrays} from "./core-language/data-types-arrays";
import {showTuples} from "./core-language/data-types-tuples";
import {showSpecialTypes} from "./core-language/data-types-special";
import {showBrowserDataTypes} from "./core-language/browser-data-types";
import {showArrowFunctions} from './core-language/arrows';
import {showBasicClasses} from './core-language/classes-without-parameter-properties';
import {showParameterProperties} from "./core-language/classes-with-parameter-properties";
import {showDecorators} from "./advanced/decorators";
import {showDestructuring} from "./core-language/destructuring-syntax";
import {showDestructuringInParameters} from "./core-language/destructuring-in-parameters";
import {showAdvancedDestructuring} from "./core-language/destructuring-advanced";
import {showEnums} from "./core-language/enums";
import {wrapConsoleDemo} from "./utils";
import {showIteration} from "./core-language/iteration";
import {showFunctionOverloading} from "./advanced/function-overloads";
import {showFunctionDeclarations} from "./core-language/functions";
import {showGeneratorFunctions} from "./advanced/generators";
import {showGenericConstraints} from "./core-language/generic-constraints";
import {showGenerics} from "./core-language/generics";
import {showInterfaces} from "./core-language/interfaces";
import {showTemplateStrings} from "./core-language/template-strings";
import {showModules} from "./modules-demo/modules";
import {showIssuesWithMethods} from "./core-language/arrows-as-methods";
import {structuralTyping} from "./core-language/structural-typing";
import {showGuards} from "./advanced/guards";
import {showSymbols} from "./advanced/symbols";
import {showLiteralTypes} from "./advanced/literal-types";

import 'bootstrap/dist/css/bootstrap.min.css';
import {showTypeAliases} from "./core-language/type-aliases";
import {showUnionTypes} from "./advanced/union-types";
import {showIntersectionTypes} from "./advanced/intersection-types";
import {showBasicMappedTypes} from "./advanced/basic-mapped-types";
import {showDistinguishingMethods} from "./mapped-types/methods-verses-fields";
import {showFindingMethodNames} from "./mapped-types/finding-method-names";
import {showManagingReturnTypes} from "./mapped-types/managing-return-types";
import {showTypingHtmlElements} from "./mapped-types/typing-html-elements";
import {showWorkingWithParameters} from "./mapped-types/working-with-params";
import {showPartialApplicationBroken} from "./mapped-types/partial-invocation-broken";
import {showPartialApplicationImproved} from "./mapped-types/partial-invocation-fixed";
import {showPartialInvocationApplied} from "./mapped-types/partial-invocation-applied";
import {showRecursiveTypesWithNumbers} from "./mapped-types/recursive-types-numbers";
import {showRecursiveTypesWithLists} from "./mapped-types/recursive-types-lists";
import {showThisParameters} from "./advanced/this-parameters";
import {showDataStructures} from "./core-language/data-structures";
import {showCollectionPipeline} from "./core-language/collection-pipeline";
import {showPromises} from "./core-language/promises";
import {showSelection} from "./core-language/selection";
import {showAugmentation} from "./advanced/augmentation";
import {structuralTypingInAction} from "./core-language/structural-typing-in-action";
import {showConditionalTypes} from "./advanced/conditional-types";
import {showMappedTypeWithAliasedKeys} from "./advanced/mapped-types-aliased-keys";
import {showDiscriminatedUnions} from "./advanced/discriminated-unions";

export function doSetup() {
    const examples = {
        // Core
        "sanity": sanityCheck,
        "data-types-primitive": showPrimitiveDataTypes,
        "data-types-arrays": showArrays,
        "data-types-tuples": showTuples,
        "data-types-special": showSpecialTypes,
        "browser-data-types": showBrowserDataTypes,
        "structural-typing": structuralTyping,
        "structural-typing-in-action": structuralTypingInAction,
        "template-strings": showTemplateStrings,
        "enums": showEnums,
        "arrows": showArrowFunctions,
        "arrows-as-methods": showIssuesWithMethods,
        "classes": showBasicClasses,
        "parameter-properties": showParameterProperties,
        "interfaces": showInterfaces,
        "destructuring-syntax": showDestructuring,
        "destructuring-in-parameters": showDestructuringInParameters,
        "destructuring-advanced": showAdvancedDestructuring,
        "iteration": showIteration,
        "selection": showSelection,
        "functions": showFunctionDeclarations,
        "collection-pipeline": showCollectionPipeline,
        "generics": showGenerics,
        "data-structures": showDataStructures,
        "generic-constraints": showGenericConstraints,
        "promises": showPromises,
        "type-aliases": showTypeAliases,
        "modules": showModules,
        "using-symbols": showSymbols,
        "this-parameters": showThisParameters,

        // Advanced
        "function-overloads": showFunctionOverloading,
        "generators": showGeneratorFunctions,
        "union-types": showUnionTypes,
        "guards-and-unions": showGuards,
        "intersection-types": showIntersectionTypes,
        "literal-types": showLiteralTypes,
        "discriminated-unions": showDiscriminatedUnions,
        "augmentation": showAugmentation,
        "decorators": showDecorators,
        "basic-mapped-types": showBasicMappedTypes,
        "mapped-type-aliased-keys": showMappedTypeWithAliasedKeys,
        "conditional-types": showConditionalTypes,

        // Advanced Mapped Types
        "distinguish-methods": showDistinguishingMethods,
        "finding-method-names": showFindingMethodNames,
        "managing-return-types": showManagingReturnTypes,
        "typing-html-elements": showTypingHtmlElements,
        "working-with-params": showWorkingWithParameters,
        "typing-partial-invocation": showPartialApplicationBroken,
        "partial-invocation-improved": showPartialApplicationImproved,
        "partial-invocation-applied": showPartialInvocationApplied,
        "recursive-types-numbers": showRecursiveTypesWithNumbers,
        "recursive-types-lists": showRecursiveTypesWithLists
    };

    for (const [name, func] of Object.entries(examples)) {
        const bullet = document.getElementById(name);
        if (bullet === null) {
            console.log(`Could not add listener for ${name}`);
            continue;
        }

        const wrappedFunc = wrapConsoleDemo(func, bullet.innerHTML);
        bullet.onclick = () => {
            const output = wrappedFunc();
            if (!bullet.innerHTML.endsWith(output)) {
                bullet.innerHTML += ` ${output}`;
            }
        };
    }
}
