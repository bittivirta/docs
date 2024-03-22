
import style from "./style.module.scss"

import { useState } from 'react';
import Translate from '@docusaurus/Translate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';

export function Step({ children }) {
  return (
    <div className={style.step_content} >
      {children}
    </div>
  )
}

export default function Stepper({ title, children }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAll, setShowAll] = useState(true);
  return (
    <div className={style.stepper}>
      <div className={style.step_header}>
        <div>
          {showAll ?
            <span className={style.all_steps}><Translate id="stepper.all_steps"></Translate></span>
            :
            <div className={style.step_counter}>
              <span className={style.step_current}>{currentStep + 1}</span>
              <span className={style.step_current_number}><Translate id="stepper.of"></Translate> {children.length}</span>
            </div>
          }
        </div>
        <div className={style.title}>
          {title}
        </div>
        {showAll ?
          <button className={style.button} onClick={e => (setShowAll(!showAll))}>{showAll ? <Translate id="stepper.show_one"></Translate> : <Translate id="stepper.show_all"></Translate>}</button>
          :
          <div className='justify-self-end flex gap-2'>
            <button className={style.button} disabled={currentStep == 0} onClick={e => (currentStep > 0 && setCurrentStep(currentStep - 1))} ><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className={style.button} disabled={currentStep > children.length - 2} onClick={e => (currentStep < children.length - 1 && setCurrentStep(currentStep + 1))}><FontAwesomeIcon icon={faChevronRight} /></button>
          </div>
        }
      </div>
      <div className={style.step}>
        {children.map((child, index) => (
          <div key={index} className="flex pb-5 mb-5 border-dashed border-0 border-b-2 last:border-b-0 border-slate-200"
            style={{ display: showAll || index === currentStep ? "flex" : "none" }}>
            <div>
              <span className={style.step_current}>{index + 1}</span>
            </div>
            <div className='mt-1' style={{ width: "calc(100% - 60px)" }}>
              {child}
            </div>
          </div>)
        )}
      </div>
      <div className='flex gap-3 justify-between'>
        <div className='flex gap-2'>
          {!showAll && <>
            <button className={style.button} disabled={currentStep == 0} onClick={e => (currentStep > 0 && setCurrentStep(currentStep - 1))} ><Translate id="stepper.previous"></Translate></button>
            <button className={style.button} disabled={currentStep > children.length - 2} onClick={e => (currentStep < children.length - 1 && setCurrentStep(currentStep + 1))}><Translate id="stepper.next"></Translate></button>
          </>}
        </div>
        <div>
          <button className={style.button} onClick={e => (setShowAll(!showAll))}>{showAll ? <Translate id="stepper.show_one"></Translate> : <Translate id="stepper.show_all"></Translate>}</button>
        </div>
      </div>
    </div>
  );
}
